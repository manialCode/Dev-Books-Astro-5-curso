# Proyecto de Prueba para Astro 5.1.2  

Este proyecto está diseñado para probar y explorar las nuevas funcionalidades de **Astro 5.1.2**, incluyendo integraciones avanzadas, configuración de contenido dinámica, y características de renderizado optimizado.  

## Objetivos del Proyecto  

1. Evaluar las capacidades de **Astro 5.1.2** en la generación de sitios estáticos y dinámicos.  
2. Probar la integración con bibliotecas populares como Vue, React, y Svelte.  
3. Implementar y validar el uso de colecciones de contenido dinámico con `astro:content`.  
4. Medir el rendimiento del sitio en entornos de producción.  

## Características Principales  

### Configuración del Proyecto  

- **Framework Base:** Astro 5.1.2  
- **Lenguajes Utilizados:**  
  - HTML  
  - CSS (Tailwind CSS configurado)  
  - JavaScript (ESModules)  
- **Integraciones:**  
  - `@astrojs/vue` para componentes Vue  
  - `@astrojs/react` para componentes React  
  - `@astrojs/content` para gestionar colecciones de contenido  

### Funcionalidades Incluidas  

1. **Sistema de Rutas Dinámicas**  
   - Generación de rutas dinámicas utilizando contenido Markdown y colecciones.  
   - Páginas dinámicas como `/blog/:slug`.  

2. **Colecciones de Contenido**  
   - Configuración para manejar contenido desde `src/content/`.  
   - Ejemplo de colección: `books`, con Frontmatter validado por Zod.  

3. **Componentes Interactivos**  
   - Uso de componentes Vue y React para funcionalidades interactivas.  
   - Ejemplo: Un contador interactivo en la página principal.  

4. **Estilo Personalizado**  
   - Configuración de Tailwind CSS para diseño responsivo.  
   - Uso de variables CSS para personalización global.  

5. **Optimización de Imágenes**  
   - Implementación de optimización automática de imágenes usando `astro:assets`.  

6. **SEO y Accesibilidad**  
   - Metadatos configurados dinámicamente para SEO.  
   - Verificación de accesibilidad utilizando Lighthouse.  

### Dependencias  

```bash
pnpm install @astrojs/vue @astrojs/react @astrojs/content tailwindcss

```

---

### Estructura del Proyecto

```bash
src/
├── components/
│   ├── AmazonLogo.astro
│   ├── BookStore.astro
├── content/
│   ├── books/
│   │   ├── book1.md
│   │   └── book2.md
├── layouts/
│   ├── Layout.astro
│   └── BlogLayout.astro
├── pages/
│   ├── index.astro
│   ├── libro/
│   │   ├── [id].astro
│   │   └── index.astro
│   ├── about.astro
│   └── 404.astro
├── styles/
│   └── global.css

```

Esta versión más detallada incluye secciones claras, ejemplos de código, y pasos para la ejecución. Puede adaptarse aún más según las necesidades específicas del proyecto.
