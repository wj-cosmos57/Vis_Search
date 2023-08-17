import React, { useState } from 'react';

function Resultpage() {
    const [url, setUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) 
            return;

        const allowedExtensions = ['ppt', 'pptx', 'pdf'];
        const fileExtension = file.name.split('.').pop();
        if (!allowedExtensions.includes(fileExtension)) {
            alert('허용되지 않는 확장자입니다.');
            return;
        }

        const objectURL = URL.createObjectURL(file);
        const viewerURL = `https://view.officeapps.live.com/op/embed.aspx?src=${objectURL}`; 
        setUrl(viewerURL);
    }

    return (
        <div className="App">
            <input type="file" onChange={handleFileChange} />
            {url && <iframe src={url} width="800" height="600" title="PPT Viewer"></iframe>}
            {url}
        </div>
    );
}

export default Resultpage;