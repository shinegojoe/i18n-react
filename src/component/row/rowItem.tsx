

const RowItem = (props: any) => {
    console.log('row props', props)
    return (
        <div>
            <div>{props.item.text}</div>
        </div>
    )
}

export default RowItem