import BlogPosts from './BlogPosts';
import LatestUpdates from './LatestUpdates';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

export default function Home() {
  return (
    <div className="home-container">
     <Navbar/>
     <div className='body-container'>
     <div className="side-menu-container">
      <SideMenu/>
      <BlogPosts/>
      <LatestUpdates/>
      </div>
     </div>
    </div>
  )
}
