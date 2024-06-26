import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>Votre Panier Semble Vide, 
            <Link to='/' className={classes.link}>Ajoutez Des Articles Pour le Remplir </Link> !
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}> 
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>Total: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Vider le Panier</Button>
                    <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Payer</Button>
                </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Chargement...';

  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.tittle} variant='h3' gutterBottom>Votre Panier</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart