import { Button } from "react-bootstrap";

export default function Navbar() {
  return (
    <div className="navbar-container">
       <div className="navbar-logo">
       <i class="fa fa-newspaper-o" aria-hidden="true"></i>
       <h4>My Blog</h4>
       </div>
       <div className="navbar-buttons">
       <Button variant="light">Login</Button>
       <Button variant="outline-primary">Create account</Button>
       </div>
    </div>
  )
}
