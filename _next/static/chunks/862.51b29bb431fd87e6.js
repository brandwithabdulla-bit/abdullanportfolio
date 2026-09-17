"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862],{4862:(e,o,t)=>{t.r(o),t.d(o,{initParticles:()=>c});var i=t(2634),a=t(6386),n=t(2937),r=t(1519),l=t(5682);let s=["#ffffff","#ffffff","#ffffff"],m=e=>{3===(e=e.replace(/^#/,"")).length&&(e=e.split("").map(e=>e+e).join(""));let o=parseInt(e.slice(0,6),16);return[(o>>16&255)/255,(o>>8&255)/255,(255&o)/255]},d=`
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;

    if (uSizeRandomness == 0.0) {
      gl_PointSize = uBaseSize;
    } else {
      gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    }
    
    gl_Position = projectionMatrix * mvPos;
  }
`,v=`
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;function c(e,o={}){let t,u=document.getElementById(e);if(!u)return;let{particleCount:f=200,particleSpread:p=10,speed:h=.1,particleColors:x=s,moveParticlesOnHover:g=!0,particleHoverFactor:w=1.5,alphaParticles:y=!0,particleBaseSize:z=100,sizeRandomness:M=1,cameraDistance:P=20,disableRotation:S=!1,pixelRatio:C=window.devicePixelRatio||1}=o,R=new i.A({dpr:C,depth:!1,alpha:!0}),A=R.gl;u.appendChild(A.canvas),A.clearColor(0,0,0,0);let _=new a.i(A,{fov:15});_.position.set(0,0,P);let T=()=>{let e=u.clientWidth,o=u.clientHeight;R.setSize(e,o),_.perspective({aspect:A.canvas.width/A.canvas.height})};window.addEventListener("resize",T,!1),T();let F={x:0,y:0},B=u.closest(".hero-container")||u,E=e=>{let o=B.getBoundingClientRect();F={x:(e.clientX-o.left)/o.width*2-1,y:-((e.clientY-o.top)/o.height*2-1)}};g&&B.addEventListener("mousemove",E);let b=new Float32Array(3*f),k=new Float32Array(4*f),L=new Float32Array(3*f),j=x&&x.length>0?x:s;for(let e=0;e<f;e++){let o,t,i,a;do a=(o=2*Math.random()-1)*o+(t=2*Math.random()-1)*t+(i=2*Math.random()-1)*i;while(a>1||0===a);let n=Math.cbrt(Math.random());b.set([o*n,t*n,i*n],3*e),k.set([Math.random(),Math.random(),Math.random(),Math.random()],4*e);let r=m(j[Math.floor(Math.random()*j.length)]);L.set(r,3*e)}let I=new n.V(A,{position:{size:3,data:b},random:{size:4,data:k},color:{size:3,data:L}}),N=new r.B(A,{vertex:d,fragment:v,uniforms:{uTime:{value:0},uSpread:{value:p},uBaseSize:{value:z*C},uSizeRandomness:{value:M},uAlphaParticles:{value:+!!y}},transparent:!0,depthTest:!1}),q=new l.e(A,{mode:A.POINTS,geometry:I,program:N}),H=performance.now(),O=0,V=e=>{t=requestAnimationFrame(V);let o=e-H;H=e,O+=o*h,N.uniforms.uTime.value=.001*O,g?(q.position.x+=(-F.x*w-q.position.x)*.05,q.position.y+=(-F.y*w-q.position.y)*.05):(q.position.x=0,q.position.y=0),S||(q.rotation.x=.1*Math.sin(2e-4*O),q.rotation.y=.15*Math.cos(5e-4*O),q.rotation.z+=.01*h),R.render({scene:q,camera:_})};return t=requestAnimationFrame(V),()=>{window.removeEventListener("resize",T),g&&B.removeEventListener("mousemove",E),cancelAnimationFrame(t),u.contains(A.canvas)&&u.removeChild(A.canvas)}}}}]);