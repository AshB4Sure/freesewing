import { Chevron } from 'shared/components/navigation/primary.js'
import Option from './option'
import OptionSubGroup from './option-sub-group'
import { Li, Ul, Details, Summary, SumDiv, Deg } from 'shared/components/workbench/menu'
import { useTranslation } from 'next-i18next'

const OptionGroup = props => {
  const { t } = useTranslation(['optiongroups'])
  const config = props.config || props.design.config.optionGroups[props.group]
  return (
    <Li>
      <Details>
        <Summary>
          <SumDiv>
            <Deg />
            <span className="font-bold">
              { t(props.group) }
            </span>
          </SumDiv>
          <Chevron />
        </Summary>
        <Ul>
          {config.map(option => typeof option === 'string'
            ? <Option {...props} option={option} key={option} />
            : <OptionSubGroup {...props} sub={option} config={config} />
          )}
        </Ul>
      </Details>
    </Li>
  )
}

export default OptionGroup
