import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const pacificoFont = await fetch(
    'https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ96A.woff'
  ).then(res => res.arrayBuffer())

  return new ImageResponse(
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0a',
      borderRadius: '6px',
    }}>
      <span style={{ color: 'white', fontSize: 13, fontFamily: 'Pacifico' }}>FH</span>
    </div>,
    {
      ...size,
      fonts: [{
        name: 'Pacifico',
        data: pacificoFont,
        style: 'normal',
      }]
    }
  )
}
