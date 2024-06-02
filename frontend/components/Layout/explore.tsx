import React from 'react'
import ProfileDashboard from '../profiles/profileDashboard'
import { HeadingTitle } from '../profiles/sectionTitles'

const Explore : React.FC = () => {
    return(
        <div className='p-8'>
            <HeadingTitle title = "Recently Visited"/>
            <section className='mb-8 mt-20'>
                <ProfileDashboard/>
            </section>
            <section>

            </section>
            <HeadingTitle title = "Near You"/>
            <ProfileDashboard/>
            <HeadingTitle title = "Ninjas based on your recent Tasks"/>
            <ProfileDashboard/>
        
        </div>
    )
}

export default Explore;