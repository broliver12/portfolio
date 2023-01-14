import React from 'react'

/**
 * Loading Icon, resizes to container
 * @return {IconLoading}
 */
const IconLoading = () => (
  // eslint-disable max-len
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 513 513"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill="var(--os-primary-light)" d="M290.874 325.574L221.792 324.499L189.965 377.594C195.399 382.045 199.041 388.209 200.253 395.005L311.905 395.095C312.528 391.839 313.721 388.646 315.536 385.618C317.054 383.086 318.875 380.871 320.97 378.958L290.874 325.574ZM200.276 404.843C199.671 408.326 198.421 411.676 196.589 414.73C192.382 421.749 185.646 426.464 178.15 428.395C170.653 430.327 162.395 429.476 155.156 425.406C147.916 421.337 143.057 414.816 141.071 407.554C140.049 403.826 139.798 399.939 140.331 396.115C140.865 392.291 142.173 388.606 144.18 385.272C146.028 382.189 148.361 379.563 151.016 377.413L95.2782 283.157C94.2695 283.51 93.2609 283.863 92.2284 284.129C88.3799 285.124 84.3673 285.371 80.4213 284.858C76.4752 284.345 72.6735 283.082 69.2345 281.14C61.9948 277.071 57.1359 270.55 55.15 263.288C54.128 259.56 53.8765 255.673 54.41 251.849C54.9434 248.025 56.2513 244.34 58.2584 241.006C62.4657 233.987 69.1847 229.3 76.6814 227.369C83.1271 225.704 89.9581 226.153 96.108 228.647L152.057 135.311C146.625 131.264 142.94 125.697 141.275 119.61C139.29 112.348 140.177 104.346 144.367 97.3548C146.365 94.016 149.021 91.091 152.186 88.747C155.35 86.403 158.96 84.686 162.808 83.6944C166.656 82.7029 170.668 82.4561 174.613 82.9681C178.559 83.4802 182.36 84.7412 185.801 86.6788C189.691 88.8574 193.029 91.8496 195.573 95.4376C198.117 99.0256 199.803 103.119 200.507 107.42L312.819 107.549C313.43 104.25 314.628 100.986 316.475 97.9028C320.683 90.8841 327.418 86.1695 334.915 84.2379C338.763 83.2439 342.776 82.9962 346.722 83.5092C350.668 84.0221 354.47 85.2855 357.909 87.2269C365.148 91.2962 370.007 97.8175 371.993 105.079C373.979 112.341 373.092 120.343 368.885 127.361C367.004 130.499 364.593 133.192 361.848 135.365L417.308 229.133C421.503 227.616 425.992 227.02 430.452 227.389C434.911 227.757 439.229 229.08 443.095 231.263C450.334 235.333 455.193 241.854 457.179 249.116C459.137 256.361 458.25 264.363 454.042 271.382C449.835 278.401 443.116 283.088 435.619 285.019C429.247 286.665 422.498 286.255 416.391 283.853L360.41 377.244C365.604 381.177 369.321 386.653 370.992 392.833C372.02 396.555 372.276 400.438 371.746 404.258C371.215 408.078 369.908 411.759 367.9 415.088C363.693 422.107 356.958 426.821 349.461 428.753C345.612 429.747 341.6 429.995 337.654 429.482C333.708 428.969 329.906 427.705 326.467 425.764C322.57 423.582 319.226 420.584 316.679 416.988C314.133 413.392 312.448 409.289 311.749 404.98L200.276 404.843ZM159.839 372.509C166.637 370.042 174.123 370.03 180.925 372.476L212.735 319.408L178.217 260.926L114.308 260.846C113.725 264.161 112.483 267.437 110.651 270.492C108.869 273.465 106.598 276.052 104.048 278.151L159.839 372.509V372.509ZM104.015 233.312C108.775 237.181 112.18 242.386 113.76 248.21C113.986 249.036 114.183 249.846 114.319 250.695L178.11 250.783L212.395 193.587L180.53 139.797C179.823 140.026 179.117 140.254 178.399 140.439C172.392 141.992 166.039 141.711 160.207 139.634L104.044 233.328L104.015 233.312ZM200.429 117.238C199.834 120.51 198.625 123.731 196.81 126.758C194.896 129.951 192.468 132.671 189.633 134.868L220.465 186.899L292.211 186.822L323.213 135.103C317.647 130.597 313.945 124.296 312.786 117.356L200.429 117.238V117.238ZM352.985 140.209C346.29 142.561 338.956 142.555 332.27 140.194L301.12 192.16L336.799 252.694L397.808 252.8C398.329 249.082 399.57 245.364 401.649 241.896C403.497 238.813 405.83 236.187 408.486 234.037L352.985 140.209V140.209ZM408.48 279.258C403.528 275.298 400.151 269.977 398.569 264.194C398.45 263.759 398.36 263.34 398.269 262.921L336.129 262.804L300.705 321.9L329.733 373.395C331.11 372.808 332.522 372.351 333.959 371.981C340.046 370.411 346.484 370.712 352.383 372.842L408.48 279.258ZM351.633 383.718C351.519 383.654 351.389 383.618 351.276 383.554L351.048 383.426C346.631 381.12 341.469 380.535 336.618 381.792C334.099 382.437 331.736 383.558 329.665 385.09C327.593 386.622 325.854 388.536 324.548 390.72C321.792 395.317 321.231 400.558 322.528 405.298C323.824 410.037 326.989 414.319 331.73 416.984C336.471 419.649 341.88 420.187 346.773 418.926C349.292 418.281 351.655 417.16 353.726 415.627C355.798 414.095 357.537 412.182 358.844 409.997C361.599 405.401 362.16 400.159 360.864 395.42C360.198 392.975 359.039 390.683 357.455 388.675C355.871 386.667 353.892 384.982 351.633 383.718V383.718ZM323.545 117.516C324.209 119.956 325.363 122.244 326.942 124.25C328.522 126.255 330.494 127.938 332.748 129.202C337.489 131.867 342.898 132.405 347.791 131.144C352.684 129.883 357.106 126.812 359.861 122.216C362.617 117.619 363.177 112.378 361.881 107.638C360.585 102.899 357.42 98.6172 352.679 95.9522C347.937 93.2872 342.528 92.7492 337.635 94.01C332.742 95.2707 328.32 98.3418 325.565 102.938C322.81 107.535 322.221 112.76 323.545 117.516V117.516ZM151.245 404.956C151.908 407.396 153.063 409.684 154.642 411.69C156.221 413.695 158.194 415.378 160.447 416.642C165.189 419.307 170.598 419.845 175.491 418.584C180.384 417.323 184.806 414.252 187.561 409.656C190.316 405.059 190.877 399.818 189.581 395.078C188.917 392.638 187.763 390.35 186.184 388.345C184.604 386.339 182.631 384.656 180.378 383.392C175.637 380.727 170.228 380.189 165.335 381.45C162.816 382.095 160.453 383.216 158.382 384.748C156.311 386.281 154.572 388.194 153.265 390.378C150.509 394.975 149.92 400.2 151.245 404.956V404.956ZM151.465 116.984C152.129 119.424 153.283 121.712 154.863 123.717C156.442 125.723 158.415 127.406 160.668 128.67C165.409 131.335 170.818 131.873 175.711 130.612C178.23 129.967 180.593 128.846 182.664 127.314C184.736 125.781 186.475 123.868 187.781 121.684C190.537 117.087 191.098 111.846 189.801 107.106C189.138 104.666 187.983 102.378 186.404 100.372C184.825 98.367 182.852 96.6841 180.599 95.4201C175.858 92.7551 170.449 92.2171 165.556 93.4779C163.037 94.1232 160.674 95.2442 158.603 96.7764C156.531 98.3086 154.792 100.222 153.485 102.406C150.73 107.003 150.141 112.228 151.465 116.984ZM408.686 261.564C409.982 266.304 413.147 270.585 417.889 273.25C422.63 275.915 428.039 276.453 432.932 275.192C435.451 274.547 437.814 273.426 439.885 271.894C441.956 270.361 443.695 268.448 445.002 266.264C447.757 261.667 448.318 256.426 447.022 251.686C445.726 246.947 442.561 242.665 437.82 240C433.078 237.335 427.669 236.797 422.776 238.058C420.258 238.703 417.895 239.824 415.823 241.357C413.752 242.889 412.013 244.802 410.706 246.986C408.073 251.399 407.347 256.639 408.686 261.564V261.564ZM104.254 256.85C104.158 256.502 104.153 256.131 104.148 255.76C104.142 255.389 104.194 255.05 104.262 254.683C104.17 253.381 103.959 252.085 103.643 250.84C102.98 248.4 101.825 246.112 100.246 244.106C98.6665 242.101 96.6937 240.418 94.4405 239.154C89.6992 236.489 84.2903 235.951 79.3973 237.212C76.8785 237.857 74.5156 238.978 72.4442 240.51C70.3728 242.042 68.6338 243.956 67.327 246.14C64.5716 250.737 64.0108 255.978 65.307 260.718C65.9705 263.157 67.1251 265.446 68.7043 267.451C70.2835 269.457 72.2564 271.14 74.5096 272.404C79.2508 275.069 84.6598 275.607 89.5528 274.346C92.0716 273.7 94.4345 272.579 96.5058 271.047C98.5772 269.515 100.316 267.602 101.623 265.417C103.228 262.676 104.065 259.761 104.254 256.85V256.85ZM327.079 258.969C326.837 257.934 326.917 256.852 327.31 255.86L295.291 200.807L262.491 255.526L295.104 312.312L327.079 258.969ZM188.913 251.63L254.019 250.727L286.835 195.981L221.961 196.498L188.913 251.63V251.63ZM221.221 315.383L284.733 314.542L253.931 260.245L191.674 261.461L221.221 315.383V315.383Z" />
  </svg>
  // eslint-enable max-len
)

export default IconLoading
