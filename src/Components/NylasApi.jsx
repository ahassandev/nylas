import React, {useContext} from 'react';
import { DataContext } from '../DataContext';

function NylasApi({image, title, text, caption})   {
    const {data} = useContext(DataContext);
    const nylasapi = data.nylasapi;
  return (
    <div className='bg-white w-full'>
        <div className='mx-auto'>
            {data.nylasapi.map((api, index) => (
                <img key={index} src="{`/${nylasapi.image}`}" alt="api"
                className='h-16' />
            ))}

            <h4>{nylasapi.title}</h4>
            <p>{nylasapi.text}</p>
            <p>{nylasapi.caption}</p>
        </div>
      
    </div>
  )
}

export default NylasApi
