function FancyBox(props) {
    return (
    <div className={'FancyBox FancyBox-' + props.color}>
    {props.children} {/* everything in between the opening
    <FancyBox> and closing </FancyBox> tags */}
    </div>
    );
    }
        function Callout(props) {
    return (
    <FancyBox color="blue">
    <h1 className="Callout-title">{props.title}</h1>
    <p className="Callout-message">{props.message}</p>
    {props.children} {/* everything in between the opening
    <Callout> and closing </Callout> tags */}
    </FancyBox>
    );
    }
    // render the Callout component with FullName as children
    <Callout title="Nested React Component"
    message="Simple message with a fancy box applied via composition">
    <FullName first="Elon" last="Musk" />
    </Callout>
    // sample CSS to make things fancy
    .FancyBox { --mask: linear-gradient(#000 0 0) 50%/calc(100% - 37.00px)
    calc(100% - 37.00px) no-repeat,
    radial-gradient(farthest-side,#000 98%,#0000) 0 0/2em 2em round; mask:
    var(--mask); -webkit-mask: var(--mask); padding: 2em;
    background: linear-gradient(135deg, #1f005c, #5b0060, #870160, #ac255e,
    #ca485c, #ffb56b) fixed; color: white; }
    .FancyBox-blue { background: linear-gradient(135deg, #140061, #50006E,
    #64018C, #6955FF, #4684FF, #1FA7FF) fixed;