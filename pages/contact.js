import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";
import { DragCards } from "../components/DragCards"; // Import the DragCards component

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: "",
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        cv: formData.cv,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      alert("Form berhasil dikirim!");
      setFormData({ name: "", email: "", phone: "", cv: "", message: "" });
    } else {
      alert("Terjadi kesalahan, silakan coba lagi.");
    }
  }

  return (
    <>
      <Head>
        <title>Contact us - Jelo Art</title>
      </Head>

      <div className="pt-28 pb-12 flex flex-col items-center">
        <div className="custom-screen text-gray-600 w-full px-5">
          {/* Header */}
          <div className="space-y-5 max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800">
              Jadilah Bagian Dari Perjalanan Kami!!
            </h1>
            <p className="max-w-xl mx-auto text-gray-600">
              Di sini kamu bisa nemuin hal-hal baru, ngasah diri, sambil tetap enjoy bareng tim seru. 
              Setiap langkahnya bakal jadi pengalaman berharga yang bikin kamu tumbuh dan penuh cerita seru.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-lg w-full mx-auto">
            <form 
              onSubmit={handleSubmit} 
              className="space-y-5 font-medium text-left"
            >
              {/* Nama & Email */}
              <div className="space-y-4">
                <div>
                  <label>Nama Lengkap</label>
                  <Input
                    aria-label="Nama Lengkap"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 w-full focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    aria-label="Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 w-full focus:border-indigo-600"
                  />
                </div>
              </div>

              {/* No Telp & CV */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label>No Telp</label>
                  <Input
                    aria-label="No Telp"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 w-full focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label>Link CV & Portfolio</label>
                  <Input
                    aria-label="Link Cv"
                    type="url"
                    required
                    value={formData.cv}
                    onChange={(e) => setFormData({ ...formData, cv: e.target.value })}
                    className="mt-2 w-full focus:border-indigo-600"
                  />
                </div>
              </div>

              {/* Pesan */}
              <div>
                <label>Pesan</label>
                <textarea
                  aria-label="Pesan"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="pt-1">
                <Button className="w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring">
                  Submit
                </Button>
              </div>
            </form>
          </div>

          {/* Gallery Section with DragCards */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-8">
              Tim Kami
            </h2>
            <div className="relative">
              <DragCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}