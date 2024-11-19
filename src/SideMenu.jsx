export default function SideMenu() {
  const sortText = [
    {img: <i class="fa fa-clock-o" aria-hidden="true"></i>,name:"Latest"},
    {img: <i class="fa fa-fire" aria-hidden="true"></i>,name:"Hot"},
    {img: <i class="fa fa-star" aria-hidden="true"></i>,name:"Best"}
  ];
  const sortNav = [
    {img: <i class="fa fa-home" aria-hidden="true"></i>,name:"Home"},
    {img: <i class="fa fa-user" aria-hidden="true"></i>,name:"Profile"},
    {img: <i class="fa fa-pencil" aria-hidden="true"></i>,name:"Make Post"},
    {img: <i class="fa fa-info-circle" aria-hidden="true"></i>,name:"About"},
    {img: <i class="fa fa-file-video-o" aria-hidden="true"></i>,name:"Videos"},
    {img: <i class="fa fa-envelope" aria-hidden="true"></i>,name:"Contact"}
  ]

  return (
    
      <div className="left-side-container">
       <h5>Sort by</h5>
       <div className="sortby-filter">
        <ul className="sort-nav">{sortText.map((sort, index)=>(
          <li key={index}>{sort.img} {sort.name}</li>
        ))}</ul>
       </div>
       <div className="navigation-container">
       <h5>Navigation</h5>
       <div className="sortby-filter">
        <ul className="sort-nav">{sortNav.map((sort, index)=>(
          <li key={index}>{sort.img} {sort.name}</li>
        ))}</ul>
       </div>
       </div>
      </div>
  )
}
