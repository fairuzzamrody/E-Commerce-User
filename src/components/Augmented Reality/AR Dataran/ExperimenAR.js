import React from "react";

function ExperimenAR() {
  return (
    <div>
      {/* <model-viewer
        camera-controls
        touch-action="pan-y"
        ar-placement="floor"
        skybox-image="https://cdn.glitch.global/eeff5289-f8a2-4538-8a01-b356b23342ea/AdobeStock_190358116_Preview.jpeg?v=1673511925791"
        skybox-height="2m"
        shadow-intensity="1"
        max-camera-orbit="auto 90deg auto"
        alt="A 3D astronaut model depicted within a forest"
        src="https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/KursiSandarBerlengan.glb?v=1699906013960"
        ar-status="not-presenting"
      ></model-viewer> */}
<model-viewer 
camera-controls 
touch-action="pan-y" 
skybox-image="https://cdn.glitch.global/eeff5289-f8a2-4538-8a01-b356b23342ea/AdobeStock_190358116_Preview.jpeg?v=1673511925791"
skybox-height="1.2m" 
shadow-intensity="2" 
// max-camera-orbit="auto 90deg auto"
 alt="A 3D astronaut model depicted within a forest" 
 src="https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/KursiSandarBerlengan.glb?v=1699906013960">

 </model-viewer>

      {/* <model-viewer
        camera-controls
        touch-action="pan-y"
        skybox-image="https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/spruit_sunrise.jpg?v=1704464101732"
        skybox-height="1.5m"
        ar-placement="floor"
        shadow-intensity="1"
        max-camera-orbit="auto 90deg auto"
        alt="A 3D astronaut model depicted within a forest"
        src="https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/KursiSandarBerlengan.glb?v=1699906013960"
      ></model-viewer> */}
    </div>
  );
}

export default ExperimenAR;
