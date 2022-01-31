import XrayIcon from 'shared/components/icons/xray.js'
import { linkClasses, Chevron } from 'shared/components/navigation/primary.js'
import Reset from './reset.js'
import Disable from './disable.js'
import ConsoleLog from './console-log.js'
import List from './list.js'
import { Ul, Details, TopSummary } from 'shared/components/workbench/menu'

const Xray = props => {

  return (
    <Details open>
      <TopSummary icon={<XrayIcon />}>
        {props.gist?.xray?.enabled
          ? (
            <>
              <span className={`grow ${linkClasses} hover:cursor-resize font-bold uppercase`}>
                {props.app.t('settings.xray.title')}
              </span>
              <Chevron />
            </>
          ) : (
            <>
            <button
              className={`grow ${linkClasses} hover:cursor-resize uppercase font-bold text-left`}
              onClick={() => props.updateGist(['xray', 'enabled'], true)}
            >
              {props.app.t('settings.xray.title')}
            </button>
            <span className="text-normal text-secondary">
              {props.app.t('cfp.thingIsDisabled', { thing: props.app.t('settings.xray.title') })}
            </span>
            </>
          )
        }
      </TopSummary>
      {props.gist?.xray?.enabled && (
        <Ul>
          <Disable {...props} />
          <Reset {...props} />
          <ConsoleLog draft={props.draft} />
          {
            props.gist?.xray?.parts &&
            Object.keys(props.gist.xray.parts).map(partName => <List {...props} partName={partName} />)
          }
        </Ul>
      )}
    </Details>
  )
}

export default Xray
