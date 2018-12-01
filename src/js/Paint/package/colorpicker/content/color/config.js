const config = {
    color: {
        css: {
            padding: "10px"
        },
        attribute: {

        },
        bar: {
            css: {
                "position": "relative",
                "width": "200px",
                "height": "15px",
                "borderRadius": "15px",
                "backgroundColor": "#fff",
                "display": "inline-block"
            },
            attribute: {

            },
            connect: {
                css: {
                    "backgroundColor": "#aaa",
                    "position": "absolute",
                    "top": "0",
                    "right": "0",
                    "left": "0",
                    "bottom": "0",
                    "borderRadius": "20px"
                },
                attribute: {

                }
            },
            selecter: {
                css: {
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
        number: {
            css: {
                "backgroundColor": "#e4e4e4",
                "display": "inline-block",
                "marginLeft": "20px",
                "paddingLeft": "5px",
                "paddingRight": "5px",
                "borderRadius": "3px",
            },
            attribute: {

            }
        },
    },
    rgb: {
        red: 255,
        green: 255,
        blue: 255
    }
}

export { config }