class Product {
    constructor(id_registro,
                nomeProduct,
                descriptionProduct,
                descriptionTechniqueProduct, 
                categoryProduct, 
                wordKeyProduct, 
                photoProduct
                ) {
        this.id_registro = id_registro;
        this.nomeProduct = nomeProduct;
        this.descriptionProduct = descriptionProduct;
        this.descriptionTechniqueProduct = descriptionTechniqueProduct;
        this.categoryProduct = categoryProduct; 
        this.wordKeyProduct = wordKeyProduct;
        this.photoProduct = photoProduct

    }
}

export default Product()