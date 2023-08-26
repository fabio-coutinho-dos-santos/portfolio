import './WorkExperiences.sass'

interface Props {
  title: string;
  company: string;
  children: React.ReactNode;
  icons: Array<any>
}

const WorkExperiences = (props: Props) => {

  return (
    <>
      <div className="WorkExperiences">
        <h2 className="company mt-5"> {props.company}</h2>
        <h4 className='mt-4 mb-4'>{props.title}</h4>
        <h4 className='mb-4'> Stack: {props.icons}</h4>
        <span>{props.children}</span>
      </div>
    </>
  )
}

export default WorkExperiences