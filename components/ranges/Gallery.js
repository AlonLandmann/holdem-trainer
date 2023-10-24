import Folder from '@/components/ranges/Folder'
import { constructFolders } from '@/lib/folders'
import css from '@/scss/ranges/Gallery.module.scss'

export default function Gallery({ user, handleSelectionChange }) {
  const folders = constructFolders(user)

  return (
    <div className={css.container}>
      {folders.map(folder => (
        <Folder
          key={folder.name}
          user={user}
          folder={folder}
          handleSelectionChange={handleSelectionChange}
        />
      ))}
    </div>
  )
}