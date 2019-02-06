import React from 'react'
import DashboardSummaryListItem from './DashboardSummaryListItem'
import profilePic from '../../assets/last-editor.png'
import './DashboardSummaryList.scss'

const DOCUMENTS = {
  label: 'All Documents',
  textValue: 'Documents',
}

const PHOTO_FILES = {
  label: 'Photo Files',
  textValue: 'Photo Files',
}

const VIDEO_FILES = {
  label: 'Video Files',
  textValue: 'Video Files',
}

const LAST_EDITOR = {
  label: 'Last Editor',
  textValue: 'Udin Soledators',
}

const LIST_ITEMS = [
  {
    label: DOCUMENTS.label,
    aggregate: true,
    count: 520,
    text: DOCUMENTS.textValue,
    key: DOCUMENTS.label,
  },
  {
    label: PHOTO_FILES.label,
    aggregate: true,
    count: 127,
    text: PHOTO_FILES.textValue,
    key: PHOTO_FILES.label,
  },
  {
    label: VIDEO_FILES.label,
    aggregate: true,
    count: 110,
    text: VIDEO_FILES.textValue,
    key: VIDEO_FILES.label,
  },
  {
    label: LAST_EDITOR.label,
    img: true,
    imgSrc: profilePic,
    text: LAST_EDITOR.textValue,
    key: LAST_EDITOR.label,
  },
]

const DashboardSummaryList = () => (
  <ul className='DashboardSummaryList'>
    {
      LIST_ITEMS.map(DashboardSummaryListItem)
    }
  </ul>
)

export default DashboardSummaryList
