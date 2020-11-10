export default function VSvg({ width, height, color, icon, className }) {
    let style = {
        width,
        height,
        fill: color
    }
    return (
        <svg aria-hidden="true" style={style} className={className}>
            <use xlinkHref={'#' + icon} />
        </svg>
    )
}