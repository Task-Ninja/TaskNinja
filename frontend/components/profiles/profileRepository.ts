
export interface Profile {
    name: string,
    pictureUrl: string, 
    online: boolean, 
    avrRating: number, 
    numReviews: number,
    role: string,
    description: string,
    profileLink?: string,
    chat?: string
}

export const profiles : Profile [] = [
    {
    name: "Sophie Brown",
    pictureUrl: "/profile.svg", 
    online: true, 
    avrRating: 4.5, 
    numReviews: 365,
    role: "Web Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum sunt eius, aliquam enim temporibus explicabo consectetur qui nemo mollitia."
    },
    {
    name: "Julie Smith",
    pictureUrl: "/profile.svg", 
    online: false, 
    avrRating: 3.5, 
    numReviews: 235,
    role: "Smart Contract Architect",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum sunt eius, aliquam enim temporibus explicabo consectetur qui nemo mollitia."
    },
    {
    name: "John Doe",
    pictureUrl: "/profile.svg", 
    online: false, 
    avrRating: 4.3, 
    numReviews: 156,
    role: "Voiceover Artist",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum sunt eius, aliquam enim temporibus explicabo consectetur qui nemo mollitia."    
    },
    {
    name: "Willim King",
    pictureUrl: "/profile.svg", 
    online: true, 
    avrRating: 2.5, 
    numReviews: 634,
    role: "Creative Director",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum sunt eius, aliquam enim temporibus explicabo consectetur qui nemo mollitia."    
    },
    {
    name: "Lilian Fernandez",
    pictureUrl: "/profile.svg", 
    online: true, 
    avrRating: 4.3, 
    numReviews: 467,
    role: "Voiceover Artist",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum sunt eius, aliquam enim temporibus explicabo consectetur qui nemo mollitia."    
    },
    {
    name: "Fredrik Johansson",
    pictureUrl: "/profile.svg", 
    online: true, 
    avrRating: 4.3, 
    numReviews: 345,
    role: "Photographer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum sunt eius, aliquam enim temporibus explicabo consectetur qui nemo mollitia."    
    }
]