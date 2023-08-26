import './Tag.css'

interface Props {
    text: string,
    style: string
}

const Tag = ({text, style} : Props) => {
  return (
    <div className="tag" id={style}>{text}</div>
  )
}

export default Tag