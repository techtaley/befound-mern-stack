import React  from 'react' 
//import 'bootstrap/dist/css/bootstrap.min.css' 
import { Link } from 'react-router-dom'
import axios from 'axios'
//import React from 'react'
import '../../src/App.css' 

//2. Entry functional Component - pass properties from {entry} object from <Entry /> component 
//edit - loads another editBanner url "edit/id" to update banner 
//delete - use deleteEntry method to remove a prop. 
export default function BannerEntry({id, title, desc, url, alt}){
    //const [ entries ] = useState([])

    //1) delete banner entry by id from database 
    //2) delete entry from state - filter to show all except deleted entry
    const deleteEntry = (id) => {
        axios.delete('http://localhost:4000/api/banner/'+id)
            .then(res => console.log(res.data))

        // this.setState({
        //     entries: this.state.entries.filter(items => items._id !== id)
        // })

    }      

    return (
        <div className="content banner-width">
            <div className="content banner-title">{title}</div>
            <div className="content banner-url"><img className="entry-img" src={url} alt={title}/></div>
            <div className="content banner-desc">{desc}</div>

            <div className="content banner-update">
            <Link classname="update-btn" to={'/update/'+id}>update</Link> | <button className="delete-btn" onClick={ () => { deleteEntry(id) } }>delete</button>
            </div>
        </div>                         
    )  
}
