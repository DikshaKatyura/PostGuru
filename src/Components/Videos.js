
const Videos = (props)=> {
  return <>

  <div className="video-responsive">
  <iframe width="400"
   height="300"
   src={props.src}
    frameBorder="1"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
   allowFullScreen></iframe>
    </div>

  </>
}

export default Videos;
