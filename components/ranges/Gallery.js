import { v4 as uuid } from 'uuid'
import RangeCard from '@/components/ranges/RangeCard'
import Folder from '@/components/ranges/Folder'
import { constructFolders } from '@/lib/folders'
import css from '@/scss/ranges/Gallery.module.scss'

export default function Gallery({ user }) {
  const { root, folders } = constructFolders(user)

  return (
    <div className={css.container}>
      {root.map(range => (
        <RangeCard
          key={uuid()}
          user={user}
          range={range}
        />
      ))}
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