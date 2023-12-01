import React, { Component, Fragment, useState, useEffect } from 'react';
import './gis.css';



const Gis = () => {
  const [loaded, setLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // Simulate loading the line first
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Array of image names to load
    const imageNames = Array.from({ length: 9 }, (_, index) => `${index + 1}`);
    // Load images using loadImage for each image name
    imageNames.forEach((imageName) => {
      loadImage(imageName);
    });
  }, []);

  const loadImage = (imageName) => {
    import(`./solgis/${imageName}.png`).then((image) => {
      setImages((prevImages) => [...prevImages, image.default]);
    });
  };

  const handleImageClick = (index) => {
    const imageName = `Image${index + 1}`;
    const { title, points } = texts[imageName];
    setCurrentImageIndex(index);
    setTitle(title);
    setPoints(points);
  };

  return (
    <Fragment>
      <div className='divgis'>
        <div className="image-gis-container">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} onClick={() => handleImageClick(index)}/>
          ))}
        </div>
        <div className = "textogis">
          <h3 className='titulogis'>{title}</h3>
          <ul className="listagis">
            <div className={`line3 ${loaded ? 'loaded' : ''}`}></div>
            {points.map((point, index) => (
              <li key={index} className="elementogis">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Gis;


const texts = {
  Image1: {
      title: "PLANIFICACIÓN URBANA",
      points: ['Teledetección / Relevamiento satelital', 
                'Diagnóstico urbano y ordenamiento', 
                'Catastro urbano y rural',
                'Análisis de infraestructura y servicios',
                'Visores de mapas web',
                'Topografía']
  },

  Image2: {
    title: "GESTION Y ANÁLISIS AMBIENTAL",
    points: ['Teledetección / Relevamiento satelital', 
              'Diagnóstico y análisis ambiental', 
              'Topografía, pendientes y orientaciones',
              'Periodos de sequía / inundación',
              'Focos de calor / incendios',
              'Análisis de imágenes ráster (Satélites)']
  },

  Image3: {
    title: "INFRAESTRUCTURA DE DATOS ESPACIALES (IDE)",
    points: ['Bases de datos espaciales', 
              'Geoportal visualizador y mapas', 
              'Publicación de geoservicios',
              'Normalización y adecuación de datos',
              'Automatización de procesos']
  },

  Image4: {
    title: "GEOMARKETING",
    points: ['Localización de clientes y análisis espacial', 
              'Áreas de influencia y ventas', 
              'Isocronas',
              'Geocodificación',
              'Visores de mapas web']
  },
  Image5: {
    title: "CARTOGRAFÍA TEMÁTICA",
    points: ['Mapas editoriales para revistas, manuales, libros, planes estratégicos y publicaciones', 
              'Mapas para tesis, doctorados y maestrías', 
              'Post-producción de mapas mediante software Illustrator y Photoshop']
  },
  Image6: {
    title: "CAPACITACIONES",
    points: ['Qgis y complementos', 
              'Imágenes satelitales ráster', 
              'Acceso a la información geoespacial',
              'Teledetección y georeferenciación', 
              'Toma de datos en campo']
  },
  Image7: {
    title: "ANÁLISIS DE DATOS",
    points: ['Procesamiento y limpieza de datos', 
              'Estadisticas descriptivas', 
              'Visualización de datos',
              'Análisis predictivo']
  },
  Image8: {
    title: "SERVIDORES DE DATOS GEOESPACIALES",
    points: ['Manejo de datos geoespaciales', 
              'Disponibilidad y acceso a datos remotos', 
              'Interoperabilidad con otros sistemas']
  },
  Image9: {
    title: "AUTOMATIZACIÓN DE PROCESOSS",
    points: ['Programacion y scripting orientado a GIS', 
              'Geoprocesamiento por batches', 
              'ntegracion con otras APIs']
  },
}
