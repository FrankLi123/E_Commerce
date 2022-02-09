package com.hope.dao;

import com.hope.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel ="productCategory",path="product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {


}
