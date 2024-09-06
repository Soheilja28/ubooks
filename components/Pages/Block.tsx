export const Block = props => {
    // if (!props.state.fav) {
    //     props.state.fav = []
    // }
    return <c-c class={global.styles.hoverzoom_nofade}
        style={{
            width: 170,
            height: 220,
            minWidth: 160,
            borderRadius: 15,
            position: "relative",
            backgroundColor: "white",
            boxShadow: "0 0 9px black",
            marginTop: 20
        }}>

        <img
            src={props.book.imageLink} style={{
                width: 160,
                height: 210,
                minWidth: 150,
                marginTop: 5,
                borderRadius: 10,
                objectFit: "fill"
            }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()

            }} />


        {/* {props.state.fav.includes(props.book.title) ? <img src="https://cdn.ituring.ir/research/12/heart.png"
            style={{
                width: 30,
                height: 30,
                position: "absolute",
                bottom: 5,
                right: 5
            }} /> : null} */}


    </c-c>

}