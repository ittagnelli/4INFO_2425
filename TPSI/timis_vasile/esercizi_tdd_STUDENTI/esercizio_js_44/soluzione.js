export const ordina = (l) => {
    var library = [
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
        ];

    return l.sort((a, b) => {
        const titleA = a.title.toLowerCase();  
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) 
            return 1; 
        if (titleA > titleB) 
            return -1; 
        return 0;                       
    });
};
