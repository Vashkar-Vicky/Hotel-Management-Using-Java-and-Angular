

export interface room{
     id : number;
     name :String;
     email :String;
     roomType : String;
}
export interface TravelItem{
     title :String;
     description : String;
     link :String;
     imageUrl: String;
}
// export interface Feed {
//      version: String;
//      title: String;
//      home_page_url: String;
//      feed_url: String;
//      description: String;
//      icon: String;
//      language: String;
//    }
  
   export interface Author {
     name: String;
   }
   
   export interface Item {
     id: String;
     url: String;
     title: String;
     content_text: String;
     content_html: String;
     image: String;
     date_published: String;
     authors: Author[];
   }
   
export interface Body {
    //  id: String;
    //  feed: Feed;
      items: Item[];
   }