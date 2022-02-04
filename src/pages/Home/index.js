import React, { useState } from 'react';

import { FiLink } from 'react-icons/fi'

import { saveLink } from '../../services/storeLinks'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'

import api from '../../services/api'

import './home.css'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [link, setLink] = useState("")
  const [data, setData] = useState([])

  async function handleShortLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data)
      setShowModal(true)
      saveLink('@links', response.data)

      setLink("")
      setShowModal(true)

    }
    catch (err) {
      alert(err)
      setLink("")
    }
  }

  return (
    <div className="container-home">

      <div className="logo">
        <img src="/Logo.png" alt="logo" />
        <h1>SujeitoLink</h1>
        <span>Cole seu link aqui para encurtar</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder="Cole seu link aqui"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={() => {
          handleShortLink()
        }}>Gerar Link</button>
      </div>

      <Menu />
      {
        showModal && (
          <LinkItem
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )
      }

    </div>
  );
}

export default Home;
