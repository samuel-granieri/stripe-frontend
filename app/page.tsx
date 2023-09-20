'use client'

export default function Home() {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
};

  const sendData = async ()=>{
    const res = await fetch('https://abiec.pythonanywhere.com/create-checkout-session/', requestOptions)

    const data = await res.json()

    console.log(data)
  }



  return (
    <div>
      <p>Checkout</p>
      <button className="border-2 bg-yellow-100" onClick={()=>sendData()}>Make Checkout</button>
    </div>
  )
}
