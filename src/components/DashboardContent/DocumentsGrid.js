import React from 'react'
import Card, {
  DOC,
  MICROSOFT_WORD,
  PHOTO,
  VIDEO,
  MP3,
  PDF,
} from '../Card/Card'
import Plus from 'react-feather/dist/icons/plus'
import './DocumentsGrid.scss'

const FAMILY_DOCUMENTS = 'Family Documents'
const HOLIDAY_DOCUMENTS = 'Holiday Documents'
const PLANNING_DOCUMENTS = 'Planning Documents'

const CATEGORIES = [
  {
    text: FAMILY_DOCUMENTS,
    active: true,
    key: FAMILY_DOCUMENTS,
  },
  {
    text: HOLIDAY_DOCUMENTS,
    key: HOLIDAY_DOCUMENTS,
  },
  {
    text: PLANNING_DOCUMENTS,
    key: PLANNING_DOCUMENTS,
  },
]

const CARDS = [
  {
    type: DOC,
    key: MICROSOFT_WORD,
    props: {
      type: MICROSOFT_WORD,
      title: 'Family Documents',
      content: 'Aku ingin gtbin ingin begitu aku mau gigmanaja terserah aku dong lah look situ ngogas si _',
      time: '10/04/2018',
    },
  },
  {
    type: PHOTO,
    key: PHOTO,
    props: {
      title: 'Bridge Photo',
      size: '25 MB',
      time: '10/01/2018',
    },
  },
  {
    type: VIDEO,
    key: VIDEO,
    props: {
      title: 'Home Profile',
      length: '01:28',
      time: '09/27/2018',
    },
  },
  {
    type: MP3,
    key: MP3,
    props: {
      title: 'Family Documents',
      length: '02:30',
      time: '09/14/2018',
    },
  },
  {
    type: DOC,
    key: PDF,
    props: {
      type: PDF,
      title: 'Holiday Planning',
      content: 'Yakan kamumah gatausi apayang aku rasain days kamumah taufya kompter _',
      time: '09/02/2018',
    },
  },
]

const Category = ({ text, active, key }) => {
  const activeClass = active ? 'active' : ''
  const className = `category ${activeClass}`

  return (
    <div className={className} key={key}>
      <h3>{text}</h3>
    </div>
  )
}

const DocumentsGrid = () => (
  <div className='DocumentsGrid'>
    <div className='categories'>
      {
        CATEGORIES.map(Category)
      }
    </div>

    <div className='cards'>
      {
        CARDS.map(Card)
      }

      <div className='addFilesCard'>
        <div className='plus'>
          <Plus strokeWidth={3} />
        </div>

        <h3>Add Files</h3>
      </div>
    </div>
  </div>
)

export default DocumentsGrid
