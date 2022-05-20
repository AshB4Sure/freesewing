import CopyToClipboard from 'shared/components/copy-to-clipboard'
import Dot from './dot.js'

const names = {
  js: 'javascript',
  bash: 'bash',
  sh: 'shell',
  json: 'JSON',
  yaml: 'YAML',
}

const Highlight = (props) => {

  let language = 'txt'
  if (props.language) language = props.language
  if (props.children?.props?.className) {
    language = props.children.props.className.split('-').pop()
  }
  if (language === 'dot') return <Dot>{props.children}</Dot>

  const preProps = {
    className: `language-${language} hljs text-base lg:text-lg whitespace-pre-wrap break-all`
  }
  if (props.raw) preProps.dangerouslySetInnerHTML = { __html: props.raw }

  return (
    <div className="hljs my-4">
      <div className={`
        flex flex-row justify-between
        text-xs uppercase font-bold text-neutral-content
        mt-1 border-b border-neutral-content border-opacity-25
        py-1 mb-2 lg:text-sm
      `}>
        <span>&nbsp;</span>
        <span>{names[language] ? names[language] : language}</span>
        <CopyToClipboard content={props.children} />
      </div>
      <pre {...preProps}>
        {props.children}
      </pre>
    </div>
  )
}

export default Highlight

