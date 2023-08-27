import './ProjectsItems.sass'

interface Props {
  title: string
  urlFront: string
  urlBack: string
  repoFront: string
  repoBack: string
  icon: any
  icon2: any
  icon3: any
  children: React.ReactNode
}

const ProjectsItems = ({ title, urlFront, urlBack, children, repoFront, repoBack, icon, icon2, icon3 }: Props) => {
  return (
    <>
      <div className="Projects">
        <div className="row">
          <h3 className="title mt-3">{icon} {icon2} {icon3} {title}</h3>
        </div>
        <div className="description mt-3 mb-3">{children}</div>
        {urlFront &&  ( <div> <span>Front end application: </span> <a href={urlFront}>{urlFront} </a> </div>)}
        {urlBack &&  ( <div> <span>Back end documentation: </span> <a href={urlBack}>{urlBack} </a> </div>)}
        {repoFront &&  ( <div> <span>Front end repository: </span> <a href={repoFront}>{repoFront} </a> </div>)}
        {repoBack &&  ( <div> <span>Back end repository: </span> <a href={repoBack}>{repoBack} </a> </div>)}
      </div>
    </>
  )
}

export default ProjectsItems