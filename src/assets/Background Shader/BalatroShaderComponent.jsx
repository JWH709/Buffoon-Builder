/* eslint-disable react/no-unknown-property */
import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
//ToDo: check to see if there's a way I can fix the screen resizing issue
extend({ PlaneGeometry: THREE.PlaneGeometry });

const BalatroShaderComponent = () => {
  const meshRef = React.useRef();
  const balatroMaterial = React.useRef(null);

  React.useEffect(() => {
    try {
      balatroMaterial.current = new THREE.ShaderMaterial({
        uniforms: {
          iResolution: {
            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
          },
          iTime: { value: 0 },
        },
        vertexShader: `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
        `,
        fragmentShader: `
uniform vec2 iResolution;
uniform float iTime;

#define PIXEL_SIZE_FAC 1200.0
#define SPIN_EASE 0.5
#define colour_2 vec4(0.0, 156. / 255., 1., 1.0) // Blue
#define colour_1 vec4(0.65, 0.15, 0.15, 1.0)     // Red (darker)
#define colour_3 vec4(0.0, 0.0, 0.0, 1.0)        // Black

#define spin_amount 0.7
#define contrast 1.5

void main() {
  float pixel_size = length(iResolution.xy) / PIXEL_SIZE_FAC;
  vec2 uv = (floor(gl_FragCoord.xy * (1.0 / pixel_size)) * pixel_size - 0.5 * iResolution.xy) / iResolution.xy - vec2(0.0, 0.0);
  float uv_len = length(uv);
  
  float speed = (iTime * SPIN_EASE * 0.1) + 302.2;
  float new_pixel_angle = (atan(uv.y, uv.x)) + speed - SPIN_EASE * 20. * (1. * spin_amount * uv_len + (1. - 1. * spin_amount));
  vec2 mid = (iResolution.xy / length(iResolution.xy)) / 2.;
  uv = (vec2((uv_len * cos(new_pixel_angle) + mid.x), (uv_len * sin(new_pixel_angle) + mid.y)) - mid);
  
  uv *= 30.;
  speed = iTime * (1.);
  vec2 uv2 = vec2(uv.x + uv.y);
  
  for (int i = 0; i < 5; i++) {
    uv2 += uv + cos(length(uv));
    uv += 0.5 * vec2(cos(5.1123314 + 0.353 * uv2.y + speed * 0.131121), sin(uv2.x - 0.113 * speed));
    uv -= 1.0 * cos(uv.x + uv.y) - 1.0 * sin(uv.x * 0.711 - uv.y);
  }
  
  float contrast_mod = (0.25 * contrast + 0.5 * spin_amount + 1.2);
  float paint_res = min(2., max(0., length(uv) * (0.035) * contrast_mod));
  float c1p = max(0., 1. - contrast_mod * abs(1. - paint_res));
  float c2p = max(0., 1. - contrast_mod * abs(paint_res));
  float c3p = 1. - min(1., c1p + c2p);
  
  float center_growth = 1.0 - uv_len * 0.3; // Adjust this factor for center growth
  
  vec4 ret_col = (0.3 / contrast) * colour_1 + (1. - 0.3 / contrast) * (colour_1 * c1p + colour_2 * c2p + vec4(c3p * colour_3.rgb, c3p * colour_1.a)) * center_growth + 0.3 * max(c1p * 5. - 4., 0.) + 0.4 * max(c2p * 5. - 4., 0.);
  
  gl_FragColor = ret_col;
}
  `,
      });
    } catch (error) {
      console.error("Shader compilation error:", error);
    }
  }, []);

  useFrame(({ clock }) => {
    if (balatroMaterial.current) {
      balatroMaterial.current.uniforms.iTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[window.innerWidth, window.innerHeight]} />
      {balatroMaterial.current && (
        <primitive object={balatroMaterial.current} attach="material" />
      )}
    </mesh>
  );
};

export default BalatroShaderComponent;
