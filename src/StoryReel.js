import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return ( 
  <div className="storyReel">
    <Story image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
           profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
           title="Bill Gates"
    />
    <Story image="https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
           profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
           title="Jeff Bezos"
    />
    <Story image="https://images.pexels.com/photos/1770808/pexels-photo-1770808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
           profileSrc="https://www.biography.com/.image/t_share/MTM5OTQxMjg1NzA3MzkyMDQw/stephen-curry-gettyimages-538912798_1600jpg.jpg"
           title="Stephen Curry"
    />
    <Story image="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
           profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
           title="Mark Zucker"
    />
    <Story image="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
           profileSrc="https://i.guim.co.uk/img/media/299de5095142693092a78ac7359fa2ca10788760/0_190_3577_2146/master/3577.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=005248d5d7aaf0079a23e5c2cc113732"
           title="Malcolm X"
    />                                        
  </div>
  );  
}

export default StoryReel;