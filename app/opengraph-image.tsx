import { ImageResponse } from "next/og";

export const alt = "Will McLaughlin — Commercial Operator, Founder, and AI Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"72px",background:"linear-gradient(135deg,#f8fafc,#dbeafe 55%,#ede9fe)",color:"#101114",fontFamily:"Arial"}}>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:24,fontWeight:700}}><span>W.</span><span style={{color:"#2563eb"}}>will-portfolio</span></div>
      <div><div style={{fontSize:22,textTransform:"uppercase",letterSpacing:4,color:"#626672"}}>Commercial operator · Founder · AI builder</div><div style={{maxWidth:1000,marginTop:28,fontSize:74,lineHeight:1.02,fontWeight:750,letterSpacing:-4}}>Turning complicated commercial problems into practical systems.</div></div>
      <div style={{fontSize:24,color:"#626672"}}>Will McLaughlin · Greenville, South Carolina</div>
    </div>,
    size
  );
}