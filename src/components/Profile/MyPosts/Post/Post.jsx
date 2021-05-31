import React from 'react'
import style  from './Post.module.css';

function Post({text}) {
    return (
        <div className = {style.item}>
              <img src="https://cdn.vox-cdn.com/thumbor/48ExsWf9xBecr-aK18m01PRLVio=/95x601:1280x1460/1400x933/filters:focal(538x858:742x1062):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png" alt=""/>  
              {text}
        </div>
    )
}

export default Post
