import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Title } from "../components/Title"
import { Songs } from "../components/Songs";

export const MusicPage = ()=>{
    const [allsongs , setSongs] =useState([]); // Hook
    // Bring the Songs from Itunes
    const bringSongs = async ()=>{
        const URL = 'https://itunes.apple.com/search?term=daler+mehndi&limit=25';
        const response = await fetch(URL);
        const data = await response.json();
        console.log('Data Rec ', data);
        setSongs(data['results']); // Set allsongs
       
    }
    useEffect(()=>{
        bringSongs();
    },[])
    return (<div className="container">
    <Title/>
    <Search/>
    <Songs songs={allsongs}/>
    </div>)
}