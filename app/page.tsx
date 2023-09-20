'use client'

export default function Home() {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
};

  const sendData = async ()=>{
    const res = await fetch('http://127.0.0.1:5000/create-checkout-session', requestOptions)

    const data = res.json()

    console.log(data)
  }



  return (
    <div>
      <p>Checkout</p>
      <button className="border-2 bg-yellow-100" onClick={()=>sendData()}>Make Checkout</button>
    </div>
  )
}
