import React from 'react';
import { AccountBalanceWalletOutlined } from "@material-ui/icons";
import { ArrowDropDownOutlined } from "@material-ui/icons";
import { ChevronLeftOutlined } from "@material-ui/icons";
import { ChevronRightOutlined } from "@material-ui/icons";
import { FavoriteBorderOutlined } from "@material-ui/icons";
import { LocalMallOutlined } from "@material-ui/icons";
import { LocalOfferOutlined } from "@material-ui/icons";
import { LocationOnOutlined } from "@material-ui/icons";
import { PersonOutlined } from "@material-ui/icons";
import { PhoneInTalkOutlined } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { AppBar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function SlashfeatureMatUI(props) {
  return (
    <div>
      <Hidden lgUp implementation="css">
        <Container
          maxWidth="xl"
          style={{ marginBottom: "175px", width: "100%" }}
        >
          <AppBar style={{ width: "100%", background: "none" }}>
            <Toolbar />
            <Container
              maxWidth="xl"
              style={{
                backgroundColor: "#ffffff",
                width: "100%",
                position: "fixed",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                style={{ paddingTop: "5px", paddingBottom: "5px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item>
                      <IconButton
                        style={{ paddingTop: "7px", paddingBottom: "7px" }}
                      >
                        <LocationOnOutlined style={{ color: "#f06292" }} />
                      </IconButton>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={<PhoneInTalkOutlined />}
                        style={{
                          fontSize: "12px",
                          color: "#000000",
                          fontWeight: "700",
                          paddingLeft: "0px",
                        }}
                      ></Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container spacing={4}>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={<AccountBalanceWalletOutlined />}
                        style={{ fontSize: "12px", fontWeight: "700" }}
                      ></Button>
                    </Grid>
                    <Grid zeroMinWidth item style={{ paddingRight: "30px" }}>
                      <Button
                        endIcon={<LocalOfferOutlined />}
                        style={{
                          color: "#000000",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        Offers / Discounts
                      </Button>
                      <Badge
                        variant="standard"
                        overlap="circle"
                        color="primary"
                        badgeContent="new"
                        style={{ marginTop: "-15px", paddingLeft: "12px" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
            <Container
              maxWidth="xl"
              style={{
                width: "100%",
                backgroundColor: "#263238",
                marginTop: "48px",
                position: "fixed",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                style={{ paddingTop: "12px", paddingBottom: "12px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <Avatar
                        src="https://i.imgur.com/vxmqeSB.png"
                        style={{ width: "50px", height: "50px" }}
                      ></Avatar>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "30px",
                      paddingTop: "7px",
                      paddingLeft: "10px",
                      paddingBottom: "7px",
                      borderWidth: "1px",
                      borderColor: "#9b9b9b",
                      borderStyle: "solid",
                    }}
                  >
                    <input
                      placeholder="Search products & more.."
                      style={{
                        border: "none",
                        width: "150px",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                      }}
                    ></input>
                    <IconButton
                      style={{ paddingTop: "0px", paddingBottom: "0px" }}
                    >
                      <SearchOutlined />
                    </IconButton>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <IconButton style={{ borderRadius: "5px" }}>
                        <FavoriteBorderOutlined style={{ color: "#ffffff" }} />
                        <Badge
                          variant="standard"
                          color="primary"
                          badgeContent="9"
                          style={{ marginTop: "-15px" }}
                        />
                      </IconButton>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton style={{ borderRadius: "5px" }}>
                        <ShoppingCartOutlined style={{ color: "#ffffff" }} />
                        <Badge
                          variant="standard"
                          color="primary"
                          badgeContent="3"
                          style={{ marginTop: "-15px" }}
                        />
                      </IconButton>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton
                        style={{
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          paddingLeft: "5px",
                        }}
                      >
                        <PersonOutlined style={{ color: "#ffffff" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
            <Container
              maxWidth="xl"
              style={{
                backgroundColor: "#ffffff",
                width: "100%",
                marginTop: "122px",
                position: "fixed",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
                style={{ paddingTop: "12px", paddingBottom: "12px" }}
              >
                <Grid zeroMinWidth item>
                  <FormControl
                    variant="standard"
                    margin="none"
                    size="small"
                    color="secondary"
                  >
                    <Select
                      variant="outlined"
                      labelWidth={0}
                      style={{ width: "40px", height: "20px" }}
                    >
                      <Grid
                        container
                        spacing={2}
                        id="id_mjIGp64N2pd"
                        direction="column"
                        style={{ position: "relative" }}
                      >
                        <Grid zeroMinWidth item>
                          <Button
                            endIcon={
                              <ArrowDropDownOutlined
                                style={{
                                  marginLeft: "-10px",
                                  paddingBottom: "0px",
                                  paddingTop: "0px",
                                }}
                              />
                            }
                            style={{ fontSize: "12px", fontWeight: "900" }}
                          >
                            FASHION
                          </Button>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Button
                            endIcon={
                              <ArrowDropDownOutlined
                                style={{
                                  marginLeft: "-10px",
                                  paddingBottom: "0px",
                                  paddingTop: "0px",
                                }}
                              />
                            }
                            style={{ fontSize: "12px", fontWeight: "900" }}
                          >
                            ELECTRONICS
                          </Button>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Button
                            endIcon={
                              <ArrowDropDownOutlined
                                style={{
                                  marginLeft: "-10px",
                                  paddingBottom: "0px",
                                  paddingTop: "0px",
                                }}
                              />
                            }
                            style={{ fontSize: "12px", fontWeight: "900" }}
                          >
                            furniture
                          </Button>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Button
                            endIcon={
                              <ArrowDropDownOutlined
                                style={{
                                  marginLeft: "-10px",
                                  paddingBottom: "0px",
                                  paddingTop: "0px",
                                }}
                              />
                            }
                            style={{ fontSize: "12px", fontWeight: "900" }}
                          >
                            Mobiles
                          </Button>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Button
                            endIcon={
                              <ArrowDropDownOutlined
                                style={{
                                  marginLeft: "-10px",
                                  paddingBottom: "0px",
                                  paddingTop: "0px",
                                }}
                              />
                            }
                            style={{ fontSize: "12px", fontWeight: "900" }}
                          >
                            Laptops
                          </Button>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Button
                            endIcon={
                              <ArrowDropDownOutlined
                                style={{
                                  marginLeft: "-10px",
                                  paddingBottom: "0px",
                                  paddingTop: "0px",
                                }}
                              />
                            }
                            style={{ fontSize: "12px", fontWeight: "900" }}
                          >
                            Education
                          </Button>
                        </Grid>
                      </Grid>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container spacing={4}>
                    <Grid zeroMinWidth item style={{ paddingRight: "25px" }}>
                      <Button style={{ fontSize: "12px", fontWeight: "900" }}>
                        Trending
                      </Button>
                      <Badge
                        color="primary"
                        badgeContent="new"
                        style={{ marginTop: "-15px", paddingLeft: "9px" }}
                      />
                    </Grid>
                    <Grid zeroMinWidth item style={{ paddingRight: "25px" }}>
                      <Button style={{ fontSize: "12px", fontWeight: "900" }}>
                        Top Brands
                      </Button>
                      <Badge
                        color="primary"
                        badgeContent="new"
                        style={{ marginTop: "-15px", paddingLeft: "9px" }}
                      />
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={<LocalMallOutlined />}
                        style={{ fontSize: "12px", fontWeight: "900" }}
                      >
                        HOT SALE
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Grid container>
            <Grid zeroMinWidth item xs={12}>
              <div style={{ width: "100%", position: "relative" }}>
                <img
                  src="https://i.imgur.com/oxA7r4N.png"
                  style={{ width: "100%" }}
                ></img>
                <Grid
                  container
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                  style={{
                    zIndex: "1",
                    position: "absolute",
                    right: "0",
                    top: "0",
                    left: "0",
                    bottom: "0",
                  }}
                >
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "0px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                      }}
                    >
                      <ChevronLeftOutlined style={{ fontSize: "50px" }} />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "0px",
                        borderBottomLeftRadius: "10px",
                        borderTopLeftRadius: "10px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                      }}
                    >
                      <ChevronRightOutlined style={{ fontSize: "50px" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "15px" }}
        >
          <Grid container spacing={2} justify="center" direction="row">
            <Grid zeroMinWidth item xs={12} md={6}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Fashion Deals
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    GET UPTO 75% OFF
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <Link target="_blankl">
                    <div
                      style={{
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHNob3BwaW5nJTIwaW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60&apos;)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        height: "250px",
                      }}
                    ></div>
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={12} md={6}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Electronic Appliiances
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    START FROM ₹ 149/-
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage:
                        "url(https://images.pexels.com/photos/3031670/pexels-photo-3031670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&apos;)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  ></div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={12} md={6}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Mobiles
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    BEST ON ₹4999/-
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage:
                        "url(https://images.pexels.com/photos/1647979/pexels-photo-1647979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&apos;)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  ></div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={12} md={6}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Laptops
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    GET UPTO 25% OFF
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage:
                        "url(https://images.pexels.com/photos/6044844/pexels-photo-6044844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&apos;)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  ></div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={12} md={6}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Furnitures
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    BEST ON ₹1999/-
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage:
                        "url(https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&apos;)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  ></div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={12} md={6}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Education
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    BEST ON ₹1999/-
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1549923746-9507eec27243?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlJTIwYWNjZXNzb3JpZXN8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60&apos;)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  ></div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  MEN&#039;S WEAR
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwc2hpcnQlMjBmYXNoaW9ufGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Regular Fit Carbon Cloth"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light Blue" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹699 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹1999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid
                    zeroMinWidth
                    item
                    style={{ width: "100%", overflow: "hidden" }}
                  >
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1492447216082-4726bf04d1d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxtZW4lMjBzaGlydHxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Woodland  Slim Fit"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Dark Navy Blue" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹899 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹2199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1605423930791-b1fdc6c1e31d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fG1lbnMlMjB3ZWRkaW5nJTIwYmxhemVyfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Men's Wedding Blazer"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light Blue" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1199 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹2999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  WOMEN&#039;S WEAR
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems="center"
              justify="center"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1602629339830-b7848e2ff629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Women Floral Frock"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Gray & Red" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1399 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹3299 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Woodland  Slim Fit T-Shirt"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Navy Gray" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹499 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹1799 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1583397758734-a524369cd4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Women Long Frock"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light White" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1549/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹3999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  KID&#039;S WEAR
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Woodland  Party Wear's"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Yellow & Navy Gray" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1299 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹2299 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/164835/pexels-photo-164835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Puma Regular Fit Jeans"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light Black" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1999 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹4499 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1006106/pexels-photo-1006106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Peter England Winter Wear's"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Black" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1549/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹3999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  ELECTRONIC APPLIANCES
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1603144229867-797e6ceeb9c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c291bmQlMjBzcGVha2Vyc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Audible Speakers"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Logitech" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹499 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹1299 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Sony Gaming Consoles"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Play Station & X-Box" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹22299 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹49999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1581837672885-533599e35674?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpciUyMGRyeWVyfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Hair Dryers"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Philips" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹399/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹1449 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  MOBILES
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Samsung A73"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="4GB, 128GB" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹14999 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹20199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="OnePlus RS9"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="6GB, 128GB" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹22299 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹35999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/410635/pexels-photo-410635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Huawei Y9 Plus"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="6GB, 256GB" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹25499/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹39999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  LAPTOPS
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/194356/pexels-photo-194356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Apple A52"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="8GB, 512GB SSD, i3, 11th Gen" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹90199 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹120199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Dell Inspiron 7211"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="8GB, 512GB SSD, i5, 10th Gen" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹65499 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹75499 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Apple  MacBook"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="16GB, 1TB SSD, i7, 11th Gen" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹159999 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹220999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  FURNITURES
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGJlZHJvb20lMjAlMjBmdXJuaXR1cmV8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Mattresses"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Peps Kurlon" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹3199 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹12199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Dining Table"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Edra" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹12499 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹35499 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Chairs"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Poliform" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹72499/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹86999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  EDUCATIONS
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Data Science Cource"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Weekend / WeekDays" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹4199 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹20199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGlmZSUyMHNraWxsc3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Digital Marketing Course"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Weekend / WeekDays" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹7999 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹29999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={9} md={4} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/5699467/pexels-photo-5699467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Stop Overthinking?"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Weekend" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1999/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹12999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#E0E0E0", paddingTop: "20px" }}
        >
          <Paper
            square
            style={{
              backgroundColor: "#263238",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <Grid
              container
              alignContent="center"
              spacing={5}
              justify="space-evenly"
              direction="row"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
            >
              <Grid zeroMinWidth item xs={6} md={3}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item style={{ paddingBottom: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      About{" "}
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      variant="body2"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Contact Us
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      About Us
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Blog
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Wholesale
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={6} md={3}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item style={{ paddingBottom: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Help
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Payments
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Shipping
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Cancellation &amp; Returns
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Reports
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={6} md={3}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item style={{ paddingBottom: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Policy
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Return Policy
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Terms Of Use
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Security
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Privacy
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={6} md={3}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item style={{ paddingBottom: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Services
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Fashion Styles
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Electronic Alliances
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Mobiles
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Laptops
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Furnitures
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Education
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{
            backgroundColor: "#E0E0E0",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Paper
            square
            style={{
              backgroundColor: "#4A148C",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <Grid container justify="center" spacing={7}>
              <Grid zeroMinWidth item>
                <Link>
                  <i
                    className="fab fa-twitter"
                    style={{
                      borderRadius: "50px",
                      padding: "10px",
                      fontSize: "25px",
                      borderColor: "#becfaa",
                      borderStyle: "solid",
                      color: "#ffffff",
                    }}
                  ></i>
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Link>
                  <i
                    className="fab fa-instagram"
                    style={{
                      borderRadius: "50px",
                      padding: "10px",
                      fontSize: "25px",
                      borderColor: "#becfaa",
                      borderStyle: "solid",
                      color: "#ffffff",
                    }}
                  ></i>
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Link>
                  <i
                    className="fab fa-facebook-f"
                    style={{
                      borderRadius: "50px",
                      padding: "10px 15px",
                      fontSize: "25px",
                      borderColor: "#becfaa",
                      borderStyle: "solid",
                      color: "#ffffff",
                    }}
                  ></i>
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Link>
                  <i
                    className="fa-at fas"
                    style={{
                      borderRadius: "50px",
                      padding: "10px",
                      fontSize: "25px",
                      borderColor: "#becfaa",
                      borderStyle: "solid",
                      color: "#ffffff",
                    }}
                  ></i>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Hidden>
      <Hidden implementation="css" mdDown>
        <Container
          maxWidth="xl"
          style={{ marginBottom: "175px", width: "100%" }}
        >
          <AppBar style={{ width: "100%", background: "none" }}>
            <Toolbar />
            <Container
              maxWidth="xl"
              style={{
                backgroundColor: "#ffffff",
                width: "100%",
                position: "fixed",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                style={{ paddingTop: "5px", paddingBottom: "5px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid container spacing={4}>
                    <Grid zeroMinWidth item>
                      <IconButton
                        style={{ paddingTop: "7px", paddingBottom: "7px" }}
                      >
                        <LocationOnOutlined style={{ color: "#f06292" }} />
                      </IconButton>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={<PhoneInTalkOutlined />}
                        style={{
                          color: "#000000",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        Contact US
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container spacing={4}>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={<AccountBalanceWalletOutlined />}
                        style={{ fontSize: "12px", fontWeight: "700" }}
                      >
                        Wallet
                      </Button>
                    </Grid>
                    <Grid zeroMinWidth item style={{ paddingRight: "30px" }}>
                      <Button
                        endIcon={<LocalOfferOutlined />}
                        style={{
                          color: "#000000",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        Offers / Discounts
                      </Button>
                      <Badge
                        variant="standard"
                        overlap="circle"
                        color="primary"
                        badgeContent="new"
                        style={{ marginTop: "-15px", paddingLeft: "12px" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
            <Container
              maxWidth="xl"
              style={{
                width: "100%",
                backgroundColor: "#263238",
                marginTop: "48px",
                position: "fixed",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                style={{ paddingBottom: "5px", paddingTop: "5px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <Avatar
                        src="https://i.imgur.com/vxmqeSB.png"
                        style={{ width: "50px", height: "50px" }}
                      ></Avatar>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Link
                            color="initial"
                            underline="none"
                            style={{ fontSize: "35px", fontWeight: "700" }}
                          >
                            Feature Slash
                          </Link>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Typography
                            variant="body2"
                            color="initial"
                            style={{
                              fontSize: "18px",
                              marginTop: "-8px",
                              fontWeight: "700",
                              letterSpacing: "1px",
                              textAlign: "right",
                            }}
                          >
                            Feature Trends
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "30px",
                      paddingTop: "7px",
                      paddingLeft: "10px",
                      paddingBottom: "7px",
                      borderWidth: "1px",
                      borderColor: "#9b9b9b",
                      borderStyle: "solid",
                    }}
                  >
                    <input
                      placeholder="Search for products, brands and more..."
                      style={{
                        border: "none",
                        width: "350px",
                        outline: "none",
                        background: "none",
                        fontSize: "14px",
                      }}
                    ></input>
                    <IconButton
                      style={{ paddingTop: "0px", paddingBottom: "0px" }}
                    >
                      <SearchOutlined />
                    </IconButton>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={4}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <IconButton style={{ borderRadius: "5px" }}>
                        <FavoriteBorderOutlined style={{ color: "#ffffff" }} />
                        <Badge
                          variant="standard"
                          color="primary"
                          badgeContent="9"
                          style={{ marginTop: "-15px" }}
                        />
                        <Link
                          color="initial"
                          variant="subtitle2"
                          underline="none"
                          style={{
                            fontSize: "15px",
                            color: "#ffffff",
                            fontWeight: "900",
                            letterSpacing: "2px",
                            paddingLeft: "15px",
                          }}
                        >
                          Wishlist
                        </Link>
                      </IconButton>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton style={{ borderRadius: "5px" }}>
                        <ShoppingCartOutlined style={{ color: "#ffffff" }} />
                        <Badge
                          variant="standard"
                          color="primary"
                          badgeContent="3"
                          style={{ marginTop: "-15px" }}
                        />
                        <Link
                          color="initial"
                          variant="body2"
                          underline="none"
                          style={{
                            fontSize: "15px",
                            color: "#ffffff",
                            fontWeight: "900",
                            letterSpacing: "2px",
                            paddingLeft: "15px",
                          }}
                        >
                          Cart
                        </Link>
                      </IconButton>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="initial"
                        underline="none"
                        style={{
                          fontSize: "15px",
                          fontWeight: "900",
                          letterSpacing: "2px",
                        }}
                      >
                        Log In
                      </Link>
                      <IconButton
                        style={{
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          paddingLeft: "5px",
                        }}
                      >
                        <PersonOutlined style={{ color: "#ffffff" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
            <Container
              maxWidth="xl"
              style={{
                backgroundColor: "#ffffff",
                width: "100%",
                marginTop: "122px",
                position: "fixed",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
                style={{ paddingTop: "12px", paddingBottom: "12px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid container spacing={2}>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={
                          <ArrowDropDownOutlined
                            style={{
                              marginLeft: "-10px",
                              paddingBottom: "0px",
                              paddingTop: "0px",
                            }}
                          />
                        }
                        style={{ fontSize: "12px", fontWeight: "900" }}
                      >
                        FASHION
                      </Button>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={
                          <ArrowDropDownOutlined
                            style={{
                              marginLeft: "-10px",
                              paddingBottom: "0px",
                              paddingTop: "0px",
                            }}
                          />
                        }
                        style={{ fontSize: "12px", fontWeight: "900" }}
                      >
                        ELECTRONICS
                      </Button>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={
                          <ArrowDropDownOutlined
                            style={{
                              marginLeft: "-10px",
                              paddingBottom: "0px",
                              paddingTop: "0px",
                            }}
                          />
                        }
                        style={{ fontSize: "12px", fontWeight: "900" }}
                      >
                        furniture
                      </Button>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={
                          <ArrowDropDownOutlined
                            style={{
                              marginLeft: "-10px",
                              paddingBottom: "0px",
                              paddingTop: "0px",
                            }}
                          />
                        }
                        style={{ fontSize: "12px", fontWeight: "900" }}
                      >
                        Mobiles
                      </Button>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={
                          <ArrowDropDownOutlined
                            style={{
                              marginLeft: "-10px",
                              paddingBottom: "0px",
                              paddingTop: "0px",
                            }}
                          />
                        }
                        style={{ fontSize: "12px", fontWeight: "900" }}
                      >
                        Laptops
                      </Button>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={
                          <ArrowDropDownOutlined
                            style={{
                              marginLeft: "-10px",
                              paddingBottom: "0px",
                              paddingTop: "0px",
                            }}
                          />
                        }
                        style={{ fontSize: "12px", fontWeight: "900" }}
                      >
                        Education
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container spacing={5}>
                    <Grid zeroMinWidth item style={{ paddingRight: "25px" }}>
                      <Button style={{ fontSize: "12px", fontWeight: "900" }}>
                        Trending
                      </Button>
                      <Badge
                        color="primary"
                        badgeContent="new"
                        style={{ marginTop: "-15px", paddingLeft: "9px" }}
                      />
                    </Grid>
                    <Grid zeroMinWidth item style={{ paddingRight: "25px" }}>
                      <Button style={{ fontSize: "12px", fontWeight: "900" }}>
                        Top Brands
                      </Button>
                      <Badge
                        color="primary"
                        badgeContent="new"
                        style={{ marginTop: "-15px", paddingLeft: "9px" }}
                      />
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Button
                        endIcon={<LocalMallOutlined />}
                        style={{ fontSize: "12px", fontWeight: "900" }}
                      >
                        HOT SALE
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Grid container>
            <Grid zeroMinWidth item xs={12}>
              <div style={{ position: "relative" }}>
                <img
                  src="https://i.imgur.com/Vrc1DYk.png"
                  style={{ width: "100%" }}
                ></img>
                <Grid
                  container
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                  style={{
                    zIndex: "1",
                    position: "absolute",
                    right: "0",
                    top: "0",
                    left: "0",
                    bottom: "0",
                  }}
                >
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "0px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                      }}
                    >
                      <ChevronLeftOutlined style={{ fontSize: "50px" }} />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "0px",
                        borderBottomLeftRadius: "10px",
                        borderTopLeftRadius: "10px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                      }}
                    >
                      <ChevronRightOutlined style={{ fontSize: "50px" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "15px" }}
        >
          <Grid container spacing={2} justify="center" direction="row">
            <Grid zeroMinWidth item xs={4}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Fashion Deals
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    GET UPTO 75% OFF
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <Link target="_blankl">
                    <div
                      style={{
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHNob3BwaW5nJTIwaW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60&apos;)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        height: "250px",
                      }}
                    ></div>
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={4}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Electronic Appliiances
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    START FROM ₹ 149/-
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage:
                        "url(https://images.pexels.com/photos/3031670/pexels-photo-3031670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&apos;)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  ></div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={4}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Mobiles
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    BEST ON ₹4999/-
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage:
                        "url(https://images.pexels.com/photos/1647979/pexels-photo-1647979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&apos;)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  ></div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={4}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Laptops
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    GET UPTO 25% OFF
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage:
                        "url(https://images.pexels.com/photos/6044844/pexels-photo-6044844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&apos;)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  ></div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={4}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Furnitures
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    BEST ON ₹1999/-
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage:
                        "url(https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&apos;)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  ></div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={4}>
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ fontWeight: "700" }}
                  >
                    Education
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "5px",
                      fontWeight: "700",
                    }}
                  >
                    BEST ON ₹1999/-
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1549923746-9507eec27243?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlJTIwYWNjZXNzb3JpZXN8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60&apos;)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  ></div>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button style={{ marginTop: "10px" }}>see more</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  MEN&#039;S WEAR
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwc2hpcnQlMjBmYXNoaW9ufGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Regular Fit Carbon Cloth"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light Blue" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹699 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹1999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid
                    zeroMinWidth
                    item
                    style={{ width: "100%", overflow: "hidden" }}
                  >
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1492447216082-4726bf04d1d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxtZW4lMjBzaGlydHxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Woodland  Slim Fit"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Dark Navy Blue" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹899 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹2199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1605423930791-b1fdc6c1e31d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fG1lbnMlMjB3ZWRkaW5nJTIwYmxhemVyfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Men's Wedding Blazer"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light Blue" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1199 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹2999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1595255958792-2740eb409d4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg0fHxtZW4lMjBmYXNoaW9ufGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Regular Fit Formal"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="white" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹599 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹1699 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  WOMEN&#039;S WEAR
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1602629339830-b7848e2ff629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Women Floral Frock"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Gray & Red" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1399 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹3299 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Woodland  Slim Fit T-Shirt"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Navy Gray" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹499 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹1799 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1583397758734-a524369cd4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Women Long Frock"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light White" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1549/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹3999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Regular Fit Jeans Shirt"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light Blue" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹849 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹1999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  KID&#039;S WEAR
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/6182233/pexels-photo-6182233.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Kid's T-Shirt"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Black" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1099 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹3299 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Woodland  Party Wear's"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Yellow & Navy Gray" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1299 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹2299 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1006106/pexels-photo-1006106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Peter England Winter Wear's"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Black" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1549/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹3999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/164835/pexels-photo-164835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Puma Regular Fit Jeans"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light Black" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1999 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹4499 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  ELECTRONIC APPLIANCES
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1603144229867-797e6ceeb9c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c291bmQlMjBzcGVha2Vyc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Audible Speakers"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Logitech" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹499 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹1299 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Sony Gaming Consoles"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Play Station & X-Box" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹22299 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹49999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1581837672885-533599e35674?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpciUyMGRyeWVyfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Hair Dryers"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Philips" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹399/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹1449 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpbW1lcnxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="MI Trimmer for Men"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Philips" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹699 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹2199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  MOBILES
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Samsung A73"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="4GB, 128GB" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹14999 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹20199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="OnePlus RS9"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="6GB, 128GB" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹22299 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹35999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/410635/pexels-photo-410635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Huawei Y9 Plus"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="6GB, 256GB" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹25499/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹39999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1560617544-b4f287789e24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vYmlsZXN8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Apple Iphone 10"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="6GB, 128GB" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹55699 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹79999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  LAPTOPS
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/194356/pexels-photo-194356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Apple A52"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="8GB, 512GB SSD, i3, 11th Gen" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹90199 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹120199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Dell Inspiron 7211"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="8GB, 512GB SSD, i5, 10th Gen" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹65499 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹75499 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Apple  MacBook"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="16GB, 1TB SSD, i7, 11th Gen" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹159999 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹220999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/6177661/pexels-photo-6177661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Asus Think Pad 611"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="16GB, 512GB SSD,i5, 11th Gen" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹72499/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹86999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  FURNITURES
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGJlZHJvb20lMjAlMjBmdXJuaXR1cmV8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Mattresses"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Peps Kurlon" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹3199 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹12199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Dining Table"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Edra" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹12499 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹35499 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Chairs"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Poliform" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹72499/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹86999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Sofa"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Baker" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹159999 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹220999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#e0e0e0", paddingTop: "20px" }}
        >
          <Paper square>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ fontWeight: "700" }}>
                  EDUCATIONS
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  endIcon={
                    <ArrowDropDownOutlined
                      style={{ marginLeft: "-10px", fontSize: "35px" }}
                    />
                  }
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    fontWeight: "700",
                    paddingLeft: "20px",
                    paddingRight: "15px",
                  }}
                >
                  VIEW ALL
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ padding: "10px" }}
            >
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Data Science Cource"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Weekend / WeekDays" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹4199 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹20199 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGlmZSUyMHNraWxsc3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Digital Marketing Course"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Weekend / WeekDays" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹7999 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹29999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/5699467/pexels-photo-5699467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Stop Overthinking?"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Weekend" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹1999/-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹12999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={3} style={{ padding: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "rgba(216,109,109,0.16)",
                    padding: "10px",
                  }}
                >
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1362537/pexels-photo-1362537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{ width: "100%" }}
                      ></img>
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Ayurveda Healthy LifeScience"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Weekend" />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <Grid container justify="center" spacing={2}>
                          <Grid zeroMinWidth item>
                            <Typography variant="h6">₹2999 /-</Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#d0021b",
                                textDecoration: "line-through",
                              }}
                            >
                              ₹19999 /-
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid container justify="space-between">
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Wish Cart
                        </Button>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            backgroundColor: "#f06292",
                            textTransform: "none",
                            color: "#ffffff",
                            fontWeight: "700",
                            paddingLeft: "20px",
                            fontSize: "15px",
                            fontFamily: "sans-serif",
                            paddingRight: "20px",
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "#E0E0E0", paddingTop: "20px" }}
        >
          <Paper
            square
            style={{
              backgroundColor: "#263238",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <Grid
              container
              alignContent="center"
              justify="space-around"
              direction="row"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
            >
              <Grid zeroMinWidth item xs={2}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item style={{ paddingBottom: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      About{" "}
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      variant="body1"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Contact Us
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      About Us
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Blog
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Wholesale
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={2}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item style={{ paddingBottom: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Help
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Payments
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Shipping
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Cancellation &amp; Returns
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Reports
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={2}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item style={{ paddingBottom: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Policy
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Return Policy
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Terms Of Use
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Security
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Privacy
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={2}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item style={{ paddingBottom: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Services
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Fashion Styles
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Electronic Alliances
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Mobiles
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Laptops
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Furnitures
                    </Link>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Link
                      color="textPrimary"
                      underline="none"
                      style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      Education
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container
          maxWidth="xl"
          style={{
            backgroundColor: "#E0E0E0",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Paper
            square
            style={{
              backgroundColor: "#4A148C",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <Grid container justify="center" spacing={7}>
              <Grid zeroMinWidth item>
                <Link>
                  <i
                    className="fab fa-twitter"
                    style={{
                      borderRadius: "50px",
                      padding: "10px",
                      fontSize: "25px",
                      borderColor: "#becfaa",
                      borderStyle: "solid",
                      color: "#ffffff",
                    }}
                  ></i>
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Link>
                  <i
                    className="fab fa-instagram"
                    style={{
                      borderRadius: "50px",
                      padding: "10px",
                      fontSize: "25px",
                      borderColor: "#becfaa",
                      borderStyle: "solid",
                      color: "#ffffff",
                    }}
                  ></i>
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Link>
                  <i
                    className="fab fa-facebook-f"
                    style={{
                      borderRadius: "50px",
                      padding: "10px 15px",
                      fontSize: "25px",
                      borderColor: "#becfaa",
                      borderStyle: "solid",
                      color: "#ffffff",
                    }}
                  ></i>
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Link>
                  <i
                    className="fa-at fas"
                    style={{
                      borderRadius: "50px",
                      padding: "10px",
                      fontSize: "25px",
                      borderColor: "#becfaa",
                      borderStyle: "solid",
                      color: "#ffffff",
                    }}
                  ></i>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Hidden>
    </div>
  );
}
export default SlashfeatureMatUI;