import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const getInventory = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        stocks: true,
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Stoklar getirilirken hata oluştu.' });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, barcode, price, activeIngredient } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        name,
        barcode,
        price,
        activeIngredient,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'İlaç eklenirken hata oluştu.' });
  }
};

export const addStock = async (req: Request, res: Response) => {
  const { productId, pharmacyId, quantity, expirationDate, batchNumber } = req.body;
  try {
    const stock = await prisma.stock.create({
      data: {
        productId,
        pharmacyId,
        quantity,
        expirationDate: new Date(expirationDate),
        batchNumber,
      },
    });
    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({ error: 'Stok eklenirken hata oluştu.' });
  }
};
