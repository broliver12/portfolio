
/**
 * Shared card wrapper with a subtle gradient overlay.
 *
 * @param {any} props
 * @return {CardSurface}
 */
function CardSurface(props) {
  const {
    as = 'div',
    className = '',
    children,
    ...rest
  } = props

  const Component = as
  const combinedClassName = ('osCardSurface ' + className).trim()

  return (
    <Component className={combinedClassName} {...rest}>
      {children}
    </Component>
  )
}

export default CardSurface
