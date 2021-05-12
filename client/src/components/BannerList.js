import React, { useState, useEffect } from 'react' 

import BannerEntry from './BannerEntry'
import '../../src/App.css' 

//2. Entry functional Component - pass properties from {entry} object from <Entry /> component 
//edit - loads another editBanner url "edit/id" to update banner 
//delete - use deleteEntry method to remove a prop. 

export default function BannerList(){
    const [ entries, getEntries ] = useState([])

    useEffect(() => {

        // const disabled = document.querySelector(".disabled")

        // if(){
            
        // }

        async function fetchEntries(){
            try {
                const res = await fetch(`http://localhost:4000/api/banner`)
                const data = await res.json()
                getEntries(data)
                console.log(data)
            } catch(err){
                console.log("Issue loading images", err)
            }
        }
        
        fetchEntries()
    }, []) 

    return (
        <>
            <h1 className="heading">Update Banner</h1>
                <div className="header banner-width">
                    <div className="header banner-title">Title</div>
                    <div className="header banner-url">Url</div>
                    <div className="header banner-desc">Desc</div>
                    <div className="header banner-update">Update</div>

                </div>
          
            { entries.map(entry => (
                 <BannerEntry
                    id={entry._id}
                    title={entry.title} 
                    url={entry.url} 
                    desc={entry.desc}
                    alt={entry.title}
                />
            ))}            
        </>            
    )
}