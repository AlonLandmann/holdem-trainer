import { v4 as uuid } from 'uuid'
import Folder from '@/components/ranges/Folder'
import { constructFolders } from '@/lib/folders'
import css from '@/scss/ranges/Gallery.module.scss'

export default function Gallery({ user }) {
  const folders = constructFolders(user)

  return (
    <div className={css.container}>
      {folders.map(folder => (
        <Folder
          key={uuid()}
          user={user}
          folder={folder}
        />
      ))}
    </div>
  )
}