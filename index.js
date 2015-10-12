var graph, editor, layout, parent, data, container, autofit, bi, undoManager, outlineWindow, currentStyleName = "icons";

function load() {

    Ext.Ajax.request({
        url:'data.json',
        success:function (response) {
            data = Ext.JSON.decode(response.responseText);
            setup();
        },
        failure:function (response) {
            mxLog.debug("Error loading JSON data file");
        }
    });
}

function setup() {

    if (!mxClient.isBrowserSupported()) {
        mxUtils.error('Browser is not supported!', 200, false);
        return;
    }

    editor = new mxEditor();
    editor.setGraphContainer(container);

    graph = editor.graph;
    graph.setEnabled(true);
    graph.setPanning(true);
    graph.setTooltips(true);
    graph.maxFitScale = 2.0;
    graph.gridSize = 50;

    parent = graph.getDefaultParent();

    layout = new mxFastOrganicLayout(graph);
    layout.forceConstant = graph.container.clientHeight / 4;

    graph.panningHandler.factoryMethod = function (menu, cell, evt) {
        return createPopupMenu(graph, menu, cell, evt);
    };

    outlineWindow = new mxOutline(graph, document.getElementById("outline-body"));

    undoManager = new mxUndoManager();

    configureStylesheet();

    graph.getTooltipForCell = function (cell) {

        if (cell.decoration)
        return cell.value;
        else
        return cell.value.name;
    };

    graph.isCellFoldable = function (cell) {
        var result = false;//(typeof(cell.value.more) != "undefined");

        return result;
    };

    graph.isCellMovable = function (cell) {
        if (cell.isEdge() || cell.decoration) {
            return false;
        } else {
            return true;
        }
    }

    graph.setCellsSelectable(false);

    graph.cellRenderer.getControlBounds = function (state) {
        var w, h, scale;

        scale = Math.min(1, graph.view.scale);

        w = 24 * scale;
        h = 24 * scale;

        if (state.control != null) {

            if (state.cell.value.main) {
                return new mxRectangle(state.x + state.width / 2 + 10,
                    state.y + state.height / 2 + 10, w, h);
            }

            return new mxRectangle(state.x + state.width / 2,
                state.y + state.height / 2, w, h);
        }

        return null;
    };

    graph.getLabel = function (cell) {
        if (cell.isEdge()) {
            return '<img src="images/overlays/' + cell.value.type + '.png"> ' + cell.value.name;
        } else {

            if (currentStyleName == "icons" || cell.decoration) {
                return cell.value.name
            } else {
                return 'Name: ' + cell.value.name + '\n' + 'Type: ' + cell.value.type + '\n' + 'Status: ' + cell.value.status;
            }
        }
    };

    graph.isHtmlLabel = function (cell) {
        return cell.isEdge();
    };

    graph.click = function (mouseEvent) {
        var event = mouseEvent.getEvent(),
            cell = mouseEvent.getCell(),
            d = new mxEventObject(mxEvent.CLICK, "event", event, "cell", cell);

        mouseEvent.isConsumed() && d.consume();
        this.fireEvent(d);

        if (this.isEnabled() && !mxEvent.isConsumed(event) && !d.isConsumed())
            if (cell != null)
                this.selectCellForEvent(cell, event);
            else {
                cell = null;
                this.isSwimlaneSelectionEnabled() && (cell = this.getSwimlaneAt(mouseEvent.getGraphX(), mouseEvent.getGraphY()));
                cell != null ? this.selectCellForEvent(cell, event) : this.isToggleEvent(event) || this.clearSelection()
            }

        if (cell != null && !cell.decoration) {
            Ext.getCmp('nameLabel').setValue(cell.value.name);
            Ext.getCmp('idLabel').setValue(cell.value.id);

            if (cell.vertex) {
                Ext.getCmp('typeLabel').setValue('Node');
            } else {
                Ext.getCmp('typeLabel').setValue('Relationship');
            }
        }
    };

    graph.dblClick = function (evt, cell) {
        var mxe = new mxEventObject(mxEvent.DOUBLE_CLICK, 'event', evt, 'cell', cell);
        //this.fireEvent(mxe);

        if (this.isEnabled() &&
            !mxEvent.isConsumed(evt) &&
            !mxe.isConsumed() &&
            cell != null &&
            cell.isVertex()) {

            graph.getModel().beginUpdate();

            //graph.removeCells([cell]);

            graph.getModel().endUpdate();
        }
    };

    graph.foldCells = function (collapse, recurse, cells) {

        var cell = cells[0];

        this.model.beginUpdate();
        try {

            if (cell.value.more) {
                downloadDataForNode(cell.value);
                //return;
            }

            toggleChildren(this, cell, !collapse);

            this.model.setCollapsed(cell, collapse);
        }
        finally {
            this.model.endUpdate();
        }
    };

    var previous = graph.model.getStyle;

    graph.model.getStyle = function (cell) {
        if (cell != null) {
            var style = previous.apply(this, arguments);

            if (this.isVertex(cell)) {
                if (cell.value.more) {
                    style += ';opacity=40';
                }
            }

            return style;
        }

        return null;
    };

    build();
}

function configureStylesheet() {

    var edgeStyle = graph.getStylesheet().getDefaultEdgeStyle();
    edgeStyle[mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'white';

    edgeStyle = mxUtils.clone(edgeStyle);
    edgeStyle[mxConstants.STYLE_STARTARROW] = mxConstants.ARROW_CLASSIC;
    graph.getStylesheet().putCellStyle('2way', edgeStyle);

    var style = graph.getStylesheet().getDefaultVertexStyle();

    if (currentStyleName == "icons") {

        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
        style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
        style[mxConstants.STYLE_GRADIENTCOLOR] = 'white';
        style[mxConstants.STYLE_FONTSIZE] = '14';
        style[mxConstants.STYLE_FONTCOLOR] = 'gray';
        style[mxConstants.STYLE_FONTSTYLE] = mxConstants.FONT_BOLD;
        style[mxConstants.STYLE_PERIMETER_SPACING] = 5;
        style[mxConstants.STYLE_LABEL_POSITION] = mxConstants.ALIGN_RIGHT;
        style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_LEFT;
        style[mxConstants.STYLE_SPACING_LEFT] = '0';
        style[mxConstants.STYLE_SPACING_RIGHT] = '0';

    } else {

        delete style[mxConstants.STYLE_LABEL_POSITION];

        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_LABEL;
        style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;

        style[mxConstants.STYLE_GRADIENTCOLOR] = '#41B9F5';
        style[mxConstants.STYLE_PERIMETER_SPACING] = 2;
        style[mxConstants.STYLE_FILLCOLOR] = '#8CCDF5';
        style[mxConstants.STYLE_STROKECOLOR] = '#000000';
        style[mxConstants.STYLE_STROKEWIDTH] = 1;
        style[mxConstants.STYLE_FONTCOLOR] = '#000000';
        style[mxConstants.STYLE_OPACITY] = '100';
        style[mxConstants.STYLE_FONTSIZE] = '12';

        style[mxConstants.STYLE_SPACING_LEFT] = '32';
        style[mxConstants.STYLE_SPACING] = '4';
        style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_LEFT;
        style[mxConstants.STYLE_IMAGE_ALIGN] = mxConstants.ALIGN_LEFT;
        style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
        style[mxConstants.STYLE_IMAGE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
        style[mxConstants.STYLE_IMAGE_WIDTH] = '24';
        style[mxConstants.STYLE_IMAGE_HEIGHT] = '24';

        style = mxUtils.clone(style);

        style[mxConstants.STYLE_FILLCOLOR] = '#FFFFCB';
        style[mxConstants.STYLE_GRADIENTCOLOR] = '#E5E5B7';
        //style[mxConstants.STYLE_STROKECOLOR] = '#FFCE55';

        graph.getStylesheet().putCellStyle('db', style);
    }

    style = new Object();
    style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
    style[mxConstants.STYLE_FONTCOLOR] = '#774400';
    style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
    style[mxConstants.STYLE_PERIMETER_SPACING] = '6';
    style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_LEFT;
    style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
    style[mxConstants.STYLE_FONTSIZE] = '10';
    style[mxConstants.STYLE_FONTSTYLE] = 2;
    style[mxConstants.STYLE_IMAGE_WIDTH] = '16';
    style[mxConstants.STYLE_IMAGE_HEIGHT] = '16';
    graph.getStylesheet().putCellStyle('port', style);
}

function insertApplication(application) {
    var w, h, icon1, icon2;

    if (currentStyleName == "icons") {

        if (application.main) {
            w = 80;
            h = 80;
        } else {
            w = 50;
            h = 50;
        }

        icon1 = h * 0.15;
        icon2 = h - 16;

    } else {

        if (application.main) {
            w = 130;
            h = 50;
        } else {
            w = 130;
            h = 50;
        }

        icon1 = 0;
        icon2 = h - 16;
    }

    var style = 'image=images/' + application.type + '.png';

    style += ';' + application.type;

    var vertex = graph.insertVertex(parent, null, application, 0, 0, w, h, style);

    if (application.more) {
        var port = graph.insertVertex(vertex, null, 'Download \n node data \n from server', w-24, 0, 24, 24,
            'port;image=images/overlays/download-2.png;align=right;imageAlign=right;spacingRight=18', false);
        port.decoration = true;
        vertex.download = port;
    }

    if (application.priority) {
        var image, label;

        switch (application.priority) {
            case 1:
                image = 'exclamation-red';
                label = "Error";
                break;
            case 2:
                image = 'exclamation-shield';
                label = "Warning";
                break;
            default:
                image = 'exclamation-white';
                label = "Everything is ok"
        }

        port = graph.insertVertex(vertex, null, label, 0, icon1, 16, 16,
            'port;image=images/overlays/' + image + '.png;align=right;imageAlign=right;spacingRight=18', false);
        port.decoration = true;
    }

    if (application.status){
        var image = 'status-' + application.status, label = application.status;

        port = graph.insertVertex(vertex, null, label, 0, icon2, 16, 16,
            'port;image=images/overlays/' + image + '.png;align=right;imageAlign=right;spacingRight=18', false);
        port.decoration = true;
    }

    application.vertex = vertex;
}

function insertRelationship(relationship) {
    var from = data.applications[relationship.from].vertex;
    var to = data.applications[relationship.to].vertex;

    var edge = graph.insertEdge(parent, null, relationship, from, to);

    if (relationship.style) {
        edge.style = relationship.style;
    }

    relationship.edge = edge;
}

function build() {
    graph.view.rendering = false;
    graph.getModel().beginUpdate();

    try {

        for (var i = 0; i < data.applications.length; i++) {
            var node = data.applications[i];

            insertApplication(node);
        }

        for (i = 0; i < data.relationships.length; i++) {
            var relationship = data.relationships[i];

            insertRelationship(relationship);
        }

        relayout();
    }
    finally {

        graph.getModel().endUpdate();
        graph.view.rendering = true;
        graph.refresh();
    }

}

function fit(enforce) {

    if (enforce) {
        graph.fit()
    }

    var zoomSlider = Ext.getCmp("zoomSlider"),
        scale = graph.view.scale;

    zoomSlider.setValue(scale * 100);

    mxLog.debug(scale);
}

function relayout() {
    graph.getModel().beginUpdate();

    try {
        layout.useInputOrigin = false;
        layout.execute(parent);
    }
    catch (e) {
        throw e;
    }
    finally {

        var morph = new mxMorphing(graph);

        morph.addListener(mxEvent.DONE, function () {

            graph.getModel().endUpdate();

            fit(autofit);
        });

        morph.startAnimation();
    }
}

function toggleChildren(graph, cell, show) {

    show = (show != null) ? show : true;
    var cells = [];

    graph.traverse(cell, true, function (vertex, edge) {
        if (vertex != cell) {
            cells.push(vertex);
        }

        return vertex == cell || !graph.isCellCollapsed(vertex);
    });

    graph.getModel().beginUpdate();

    graph.toggleCells(show, cells, true);

    graph.getModel().endUpdate();
}

function toggleEdges(show) {
    var main = data.applications[0].vertex;
    show = (show != null) ? show : true;
    var cells = [];

    for (var i = 0; i < data.relationships.length; i++) {
        var edge = data.relationships[i].edge;
        if (edge.source != main && edge.target != main) {
            cells.push(edge);
        }
    }

    graph.getModel().beginUpdate();

    graph.toggleCells(show, cells, true);

    graph.getModel().endUpdate();
}

function downloadDataForCell(cell) {

    if (!cell.value.more)
        return;

    Ext.Ajax.request({
        url:'bi.json',
        success:function (response) {
            var bi = Ext.JSON.decode(response.responseText);

            graph.getModel().beginUpdate();

            for (var i = 0; i < bi.applications.length; i++) {
                data.applications.push(bi.applications[i]);
                insertApplication(bi.applications[i]);

                var rel = {name:"Data", type:"document", from:5, to:data.applications.length - 1};
                data.relationships.push(rel);
                insertRelationship(rel);
            }

            cell.value.more = false;

            graph.toggleCells(false, [cell.download], true);
            relayout();

            graph.getModel().endUpdate();
        },
        failure:function (response) {
            mxLog.debug("Error loading JSON data file");
        }
    });
}

// Function to create the entries in the popupmenu
function createPopupMenu(graph, menu, cell, evt) {
    var parent;

    if (cell) {
        parent = cell.getParent();
        if (parent.value && parent.value.more){
            cell = parent;
        }
    }

    if (cell && cell.value.more) {
        menu.addItem('Download data for Node', 'images/overlays/download.png', function () {
            downloadDataForCell(cell);
        });
    }
    else {
        menu.addItem('Test item', 'images/image.gif', function () {
            mxUtils.alert('MenuItem2');
        });
    }
    menu.addSeparator();
    menu.addItem('MenuItem3', 'images/warning.gif', function () {
        mxUtils.alert('MenuItem3: ' + graph.getSelectionCount() + ' selected');
    });
}

Ext.onReady(function () {

    function tipRender(c) {
        Ext.QuickTips.register({
            target:c.getEl(),
            text:c.tooltip
        });
    }

    Ext.tip.QuickTipManager.init();

    var graphPanel = Ext.create(Ext.Panel, {
        id:'graph',
        region:'center',

        split:true,
        minWidth:700,
        bodyStyle:'padding:10px',
        autoScroll:true,
        title:'System diagram',

        tbar:[
            {
                xtype:'button',
                icon:'images/overlays/flash.png',
                text:'Reset',
                handler:function () {
                    graph.destroy();
                    load();
                }
            },
            {
                xtype:'button',
                icon:'images/overlays/relayout.png',
                text:'Layout',
                handler:function () {
                    relayout();
                }
            },

            {
                xtype:'button',
                icon:'images/overlays/fit.png',
                text:'Fit',
                handler:function () {
                    fit(true);
                }
            },
            '-',
            {
                xtype:'button',
                icon:'images/overlays/undo.png',
                tooltip:'Undo',
                handler:function () {
                    editor.execute('undo');
                }
            },
            {
                xtype:'button',
                icon:'images/overlays/redo.png',
                tooltip:'Redo',
                handler:function () {
                    editor.execute('redo');
                }
            },
            '-',
            {
                xtype:'button',
                icon:'images/overlays/insert.png',
                text:'Add Node',
                handler:function () {
                    var root = data.applications[0].vertex;
                    var application = {type:"db"};

                    application.name = "App-" + data.applications.length;
                    data.applications.push(application);

                    var newNodeIndex = data.applications.length - 1;
                    var toIndex = Math.floor((Math.random() * 5) + 1);

                    var relationship = {type:"document", from:newNodeIndex, to:toIndex};

                    relationship.name = "Rel-" + data.relationships.length;
                    data.relationships.push(relationship);

                    graph.getModel().beginUpdate();

                    insertApplication(application);
                    insertRelationship(relationship);

                    graph.getModel().endUpdate();

                    relayout();
                }
            },
            '-',

            {
                xtype:'button',
                icon:'images/overlays/printer.png',
                text:'Print',
                handler:function () {
                    try {
                        mxLog.debug('screen = ' + graph.view.graphBounds.height);

                        var scale = mxUtils.getScaleForPageCount(1, graph);
                        scale = Math.min(1, scale);

                        var pageFormat = graph.pageFormat;
                        pageFormat.height = 2000;

                        var preview = new mxPrintPreview(graph, scale, null, 0, 0, 0, null, "Print preview", false);

                        preview.renderPage = function (w, h, dx, dy, scale, pageNumber) {
                            var div = mxPrintPreview.prototype.renderPage.call(this, w, h, dx, dy, scale, pageNumber);

                            var height = this.graph.view.graphBounds.height / this.graph.view.scale;

                            mxLog.debug('print = ' + height * scale);

                            var graphDiv = div.firstElementChild;
                            graphDiv.style.height = height * scale + 'px';

                            var table = document.createElement('div');
                            table.style.position = 'relative';
                            table.style.top = '10px';
                            table.style.width = '100%';
                            table.style.left = '30px';
                            table.style.textAlign = 'left';
                            table.style.fontSize = '0.8em';
                            table.style.fontFamily = 'Arial';

                            mxUtils.writeln(table, '');
                            mxUtils.writeln(table, 'Applications: ');

                            for (var i = 0; i < data.applications.length; i++) {
                                var app = data.applications[i];
                                mxUtils.writeln(table, "   " + i + ".  " + app.name);
                            }

                            mxUtils.writeln(table, '');
                            mxUtils.writeln(table, 'Relationships: ');

                            for (i = 0; i < data.applications.length; i++) {
                                var rel = data.relationships[i];
                                mxUtils.writeln(table, "   " + i + ".  " + rel.name);
                            }

                            div.appendChild(table);

                            return div;
                        }

                        preview.open();
                    } catch (e) {
                        mxLog.debug(e);
                    }
                }
            }
        ]
    });

    var formPanel = Ext.create(Ext.Panel, {
        id:'fieldSetForm',
        frame:true,
        collapsible:true,
        region:'east',
        split:true,
        title:'Diagram Options',
        width:305,
        minWidth:305,
        fieldDefaults:{
            msgTarget:'side',
            labelWidth:150
        },
        defaults:{
            anchor:'100%'
        },

        items:[
            {
                xtype:"fieldset",
                title:"Outline",
                collapsible:true,
                items:[
                    {
                        id:"outline",
                        style:"margin-left:30px",
                        height:150,
                        width:218
                    }
                ]
            },
            {
                xtype:'fieldset',
                title:'Diagram configuration',
                items:[
                    {
                        xtype:'checkboxfield',
                        fieldLabel:'Show only main relations',
                        tooltip:'If checked only relations between root and direct children will be shown',
                        listeners:{
                            change:function (field, value) {
                                if (value) {
                                    toggleEdges(false);
                                } else {
                                    toggleEdges(true);
                                }
                            },
                            render:tipRender
                        }
                    },

                    {
                        xtype:'checkboxfield',
                        fieldLabel:'Autofit',
                        tooltip:'If checked after layout or node expand diagram will be fitted to container area',
                        listeners:{
                            change:function (field, value) {
                                if (value) {
                                    autofit = true;
                                } else {
                                    autofit = false;
                                }
                            },
                            render:tipRender
                        }
                    },
                    {
                        xtype:'sliderfield',
                        id:'zoomSlider',
                        fieldLabel:'Zoom',
                        minValue:1,
                        maxValue:200,
                        value:100,
                        listeners:{
                            change:function (slider, value) {
                                var oldvalue = slider.getValue();
                                graph.zoomTo(value / 100, true);
                            }
                        },

                        anchor:'100%'
                    },

                    {
                        xtype:'radiogroup',
                        fieldLabel:'Layout',
                        columns:1,
                        rows:2,
                        items:[
                            {

                                id:'organicLayoutRadio',
                                checked:true,
                                boxLabel:'Standard Layout',
                                name:'rb-layout',
                                inputValue:1

                            },
                            {
                                id:'circleLayoutRadio',
                                boxLabel:'Circle Layout',
                                name:'rb-layout',
                                inputValue:2
                            }
                        ],
                        listeners:{
                            change:function (radiogroup) {

                                var organic = Ext.getCmp('organicLayoutRadio').value;
                                var circle = Ext.getCmp('circleLayoutRadio').value;

                                if (organic) {
                                    layout = new mxFastOrganicLayout(graph);
                                    layout.forceConstant = graph.container.clientHeight / 2;
                                } else {
                                    layout = new mxCircleLayout(graph);
                                    layout.moveCircle = true;
                                }

                                relayout();
                            }
                        }
                    },

                    {
                        xtype:'radiogroup',
                        fieldLabel:'Node style',
                        columns:1,
                        rows:2,
                        items:[
                            {

                                id:'iconStyleRadio',
                                checked:true,
                                boxLabel:'Icons',
                                name:'rb-style',
                                inputValue:1

                            },
                            {
                                id:'htmlStyleRadio',
                                boxLabel:'HTML',
                                name:'rb-style',
                                inputValue:2
                            }
                        ],
                        listeners:{
                            change:function (radiogroup) {

                                var icon = Ext.getCmp('iconStyleRadio').value;
                                var html = Ext.getCmp('htmlStyleRadio').value;

                                if (icon) {
                                    currentStyleName = "icons";
                                    outlineWindow.destroy();
                                    graph.destroy();
                                    load();
                                } else {
                                    currentStyleName = "boxes";
                                    outlineWindow.destroy();
                                    graph.destroy();
                                    load();
                                }
                            }
                        }
                    }
                ]
            },
            {
                xtype:'fieldset',
                title:'Selected element information',
                items:[
                    {
                        xtype:'displayfield',
                        value:'',
                        fieldLabel:'Name',
                        anchor:'100%',
                        id:'nameLabel'
                    },
                    {
                        xtype:'displayfield',
                        value:'',
                        fieldLabel:'Type',
                        anchor:'100%',
                        id:'typeLabel'
                    },
                    {
                        xtype:'displayfield',
                        value:'',
                        fieldLabel:'ID',
                        anchor:'100%',
                        id:'idLabel'
                    }
                ]
            }
        ]
    });

    Ext.create(Ext.container.Viewport, {
        layout:{
            type:'border',
            padding:5
        },

        items:[graphPanel, formPanel]

    });

    container = document.getElementById("graph-body");

    load();
});