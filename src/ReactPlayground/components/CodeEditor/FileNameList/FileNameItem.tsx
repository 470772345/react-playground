import React, { useState, useRef, useEffect, MouseEventHandler } from 'react'
import styles from './index.module.scss'
import { Popconfirm } from 'antd'
import classnames from 'classnames'

export interface FileNameItemProps {
    value: string
    actived: boolean
    onClick: () => void
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
    const {
        value,
        actived = false,
        onClick,
      } = props
    
      const [name, setName] = useState(value)
     
      return (
        <div
          className={classnames(styles['tab-item'], actived ? styles.actived : null)}
          onClick={onClick}
        >
            <span>{name}</span>
        </div>
      )

}
