export const Block = props => {
    if(!props.state.fav)
    {
        props.state.fav = []
    }
    return <f-x style={{ width: 150, height: 200, flex: 1, objectFit: "fill", minWidth: 150 , position:"relative"}}>
        <img
            className={global.styles.hoverzoom_nofade}
            src={props.book.imageLink} style={{ width: 150, height: 200, flex: 1, objectFit: "fill", minWidth: 150 }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()
            }} />

            {props.state.fav.includes(props.book.title) ? <img src="https://irmapserver.ir/research/12/heart.png" 
            style={{width:30, height:30, position:"absolute", bottom:5, right:5}}/>:null}
    </f-x>

}