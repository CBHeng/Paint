const config = {
    colorpicker:{
        css:{
            top: "200px",
            right: "100px",
            width: "300px",
            position: "fixed",
            borderRadius: "5px",
            border: "1px solid #ccc",
        },
        attribute:{

        }
    },
    navbar:{
        css:{
            cursor: "move",
            marginRight: "2px",
            marginLeft: "2px",
            paddingTop: "3px",
            paddingLeft: "5px",
            position: "relative",
            borderBottom: "1px solid #ccc",
        },
        attribute:{
            draggable: true
        },
        btn:{
            css:{
                width: "15px",
                height: "15px",
                display: "inline-block",
                border: "1px solid #ccc",
            }
        }
    },
    content:{
        css:{
            position: "relative"
        },
        color:{
            css:{
                padding: "10px"
            },
            bar:{
                css:{
                    "position": "relative",
                    "width": "200px",
                    "height": "15px",
                    "borderRadius": "15px",
                    "backgroundColor": "#fff",
                    "display": "inline-block"
                },
                connect:{
                    css: {
                        "backgroundColor": "#aaa",
                        "position": "absolute",
                        "top": "0",
                        "right":"0",
                        "left": "0",
                        "bottom": "0",
                        "borderRadius": "20px"
                    }
                },
                selecter:{
                    css:{
                        "backgroundColor": "#fff",
                        "width": "25px",
                        "height": "25px",
                        "position": "absolute",
                        "borderRadius": "15px",
                        "border": "1px solid #eee",
                        "left": "100%",
                        "top": "-5px",
                        "transform": "translateX(-50%)",
                        "cursor": "pointer",
                    },
                    attribute: {
                        draggable: true
                    },
                }
            },
            number:{
                css:{
                    "backgroundColor": "#e4e4e4",
                    "display": "inline-block",
                    "marginLeft": "20px",
                    "paddingLeft": "5px",
                    "paddingRight": "5px",
                    "borderRadius": "3px",
                }
            }
        }
    }
}

export { config }